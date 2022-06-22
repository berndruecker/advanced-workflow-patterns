console.log('Loading function');

class CancelWaitForOrderCancelation extends Error {
    constructor() {
        super("CancelWaitForOrderCancelation");
        this.name = "CancelWaitForOrderCancelation";
        this.type = "CancelWaitForOrderCancelation";
    }
}
class OrderCanceled extends Error {
    constructor() {
        super("OrderCanceled");
        this.name = "OrderCanceled";
        this.type = "OrderCanceled";
    }
}

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    if (event.errorToRaise === 'CancelWaitForOrderCancelation') {
        throw new CancelWaitForOrderCancelation();        
    } else if (event.errorToRaise === 'OrderCanceled') {
        throw new OrderCanceled();
    } else {
        return "hello world"; 
    }
};
 