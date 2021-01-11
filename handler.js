'use strict';
const aws = require("aws-sdk")

const stateMachineArn = process.env.MY_STATE_MACHINE_ARN



module.exports = {
  upload: (event, context) => {
    console.log(event.Records);
    const stepFunc = new aws.stepFunctions();
    const params = {
      stateMachineArn: stateMachineArn,
      input: JSON.stringify(event.Records[0].s3)
    }
    stepFunc.startExecution(params, (err, data) => {
      if(err){
        console.log(err);
      } else {
        console.log("Successfully started execution");
        console.log(data)
      }
    })
    
    
  }
};

