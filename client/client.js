const users = require('../server/protos/user_pb');
const service = require('../server/protos/user_grpc_pb');
const grpc = require('@grpc/grpc-js');

function main() {
    const client = new service.UserServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );
    const userRequest = new users.UserRequest();
    const user = new users.User();
    user.setFirstName("Nguyen");
    user.setLastName("Duy");
    userRequest.setUser(user);

    const call = client.listUser(userRequest, () => {});
    call.on('data', response => {
        console.log(response.getResult());
    })
    call.on('status', status => console.log(status));
    call.on('error', () => { console.log(error); });
    call.on('end', () => { console.log(`Ended!`) });
}

main()