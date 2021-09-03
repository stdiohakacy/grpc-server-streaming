const grpc = require('@grpc/grpc-js');
const users = require('../server/protos/user_pb');
const service = require('../server/protos/user_grpc_pb');

function listUser(call, callback) {
    const firstName = call.request.getUser().getFirstName();
    let count = 0;
    let intervalId = setInterval(() => {
        const userResponse = new users.UserResponse();
        userResponse.setResult(firstName);

        call.write(userResponse)
        if(++count > 9) {
            clearInterval(intervalId);
            call.end();
        }
    }, 1000);
}

function main() {
    const server = new grpc.Server();
    server.addService(service.UserServiceService, { listUser });
    server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log(`Server running on port localhost:50051`)
        server.start();
    });
}

main();