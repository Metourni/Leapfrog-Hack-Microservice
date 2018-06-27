const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../api/', 'messages');
const proto = grpc.load({root: protoPath, file: 'messages.proto'});

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.MsgService('localhost:50051', grpc.credentials.createInsecure());

const msgs = {
    valid: {
        msg: "h"
    }
};

//console.log(client.getAllMsg);

client.getAllMsg(msgs.valid, (error, response) => {
    console.log("Before if");
    if (!error) {
        //console.log("Response :", response)
        response.msg.forEach((es) => {
            console.log(es);
        });

    } else {
        console.log("Error:", error.message);
    }
});

console.log("end");

