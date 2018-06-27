'use strict';

const grpc = require('grpc');
const proto = grpc.load('./api/messages/messages.proto');
const server = new grpc.Server();

//define the callable methods that correspond to the methods defined in the protofile
server.addProtoService(proto.MsgService.service, {
    /**
     Check if an employee is eligible for leave.
     True If the requested leave days are greater than 0 and within the number
     of accrued days.
     */
    getMsgByIdRequest(call, callback) {
        console.log(call.request);
        console.log(callback);
        if (1 > 0) {
            callback(
                null,
                {
                    id: 1,
                    value: "hel",
                    msg_2: {
                        id: 2,
                        name: "bb"
                    }
                }
            );
        } else {
            callback(new Error('Invalid requested days'));
        }
    },
    getAllMsg(call, callback) {
        console.log(call.request);
        console.log(callback);
        if (1 > 0) {
            callback(
                null,
                [
                    {
                        id: 1,
                        value: "hel",
                        msg_2: {
                            id: 2,
                            name: "bb"
                        }
                    },
                    {
                        id: 1,
                        value: "hel",
                        msg_2: {
                            id: 2,
                            name: "bb"
                        }
                    },
                    {
                        id: 1,
                        value: "hel",
                        msg_2: {
                            id: 2,
                            name: "bb"
                        }
                    },
                    {
                        id: 1,
                        value: "hel",
                        msg_2: {
                            id: 2,
                            name: "bb"
                        }
                    }
                ]
            );
        } else {
            callback(new Error('Invalid requested days'));
        }
    },
    save(call, callback) {
        if (1 > 0) {
            callback(null, {msg: true});
        } else {
            callback(new Error('Invalid requested days'));
        }
    },
    saveAll(call, callback) {
        if (1 > 0) {
            callback(null, {msg: true});
        } else {
            callback(new Error('Invalid requested days'));
        }
    }

    /**
     Grant an employee leave days

     grantLeave(call, callback) {
        let granted_leave_days = call.request.requested_leave_days;
        let accrued_leave_days = call.request.accrued_leave_days - granted_leave_days;

        callback(null, {
            granted: true,
            granted_leave_days,
            accrued_leave_days
        });
    }
     */
});

//Specify the IP and and port to start the grpc Server, no SSL in test environment
server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', 'localhost:50051');


/*
const http = require('http');
const app = require('./app');
const port = process.env.APP_PORT || 3000;
const server = http.createServer(app);
require('dotenv').config();


server.listen(port);
console.log('The app : ' + process.env.APP_NAME + ' RESTful API server started on : ' + port);
*/
