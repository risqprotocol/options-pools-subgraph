// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Loss extends ethereum.Event {
  get params(): Loss__Params {
    return new Loss__Params(this);
  }
}

export class Loss__Params {
  _event: Loss;

  constructor(event: Loss) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Profit extends ethereum.Event {
  get params(): Profit__Params {
    return new Profit__Params(this);
  }
}

export class Profit__Params {
  _event: Profit;

  constructor(event: Profit) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Provide extends ethereum.Event {
  get params(): Provide__Params {
    return new Provide__Params(this);
  }
}

export class Provide__Params {
  _event: Provide;

  constructor(event: Provide) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get writeAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get writeAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LiquidityPool extends ethereum.SmartContract {
  static bind(address: Address): LiquidityPool {
    return new LiquidityPool("LiquidityPool", address);
  }

  totalBalance(): BigInt {
    let result = super.call("totalBalance", "totalBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalBalance", "totalBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class SendCall extends ethereum.Call {
  get inputs(): SendCall__Inputs {
    return new SendCall__Inputs(this);
  }

  get outputs(): SendCall__Outputs {
    return new SendCall__Outputs(this);
  }
}

export class SendCall__Inputs {
  _call: SendCall;

  constructor(call: SendCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SendCall__Outputs {
  _call: SendCall;

  constructor(call: SendCall) {
    this._call = call;
  }
}

export class SetLockupPeriodCall extends ethereum.Call {
  get inputs(): SetLockupPeriodCall__Inputs {
    return new SetLockupPeriodCall__Inputs(this);
  }

  get outputs(): SetLockupPeriodCall__Outputs {
    return new SetLockupPeriodCall__Outputs(this);
  }
}

export class SetLockupPeriodCall__Inputs {
  _call: SetLockupPeriodCall;

  constructor(call: SetLockupPeriodCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetLockupPeriodCall__Outputs {
  _call: SetLockupPeriodCall;

  constructor(call: SetLockupPeriodCall) {
    this._call = call;
  }
}

export class UnlockCall extends ethereum.Call {
  get inputs(): UnlockCall__Inputs {
    return new UnlockCall__Inputs(this);
  }

  get outputs(): UnlockCall__Outputs {
    return new UnlockCall__Outputs(this);
  }
}

export class UnlockCall__Inputs {
  _call: UnlockCall;

  constructor(call: UnlockCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnlockCall__Outputs {
  _call: UnlockCall;

  constructor(call: UnlockCall) {
    this._call = call;
  }
}