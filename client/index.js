const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../', 'proto');
const proto = grpc.load({root: protoPath, file: 'messages.proto'});

require('dotenv').config();
const serverUrl = process.env.GRPC_SERVER_HOST + ':' + process.env.GRPC_SERVER_PORT;

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.MsgService(serverUrl, grpc.credentials.createInsecure());

const msgs = {
    message: {
        msgId: 1
    }
};

//console.log(client.getAllMsg);

client.getMsgByIdRequest(msgs.message, (error, response) => {
    //console.log("Before if");
    if (!error) {
        console.log("Response :", response)
        /*response.msg.forEach((es) => {
            console.log(es);
        });*/

    } else {
        console.log("Error:", error.message);
    }
});

//console.log("end");

