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

export class Create extends ethereum.Event {
  get params(): Create__Params {
    return new Create__Params(this);
  }
}

export class Create__Params {
  _event: Create;

  constructor(event: Create) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get settlementFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Exercise extends ethereum.Event {
  get params(): Exercise__Params {
    return new Exercise__Params(this);
  }
}

export class Exercise__Params {
  _event: Exercise;

  constructor(event: Exercise) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get profit(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Expire extends ethereum.Event {
  get params(): Expire__Params {
    return new Expire__Params(this);
  }
}

export class Expire__Params {
  _event: Expire;

  constructor(event: Expire) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get premium(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RisqOptions__optionsResult {
  value0: i32;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: i32;

  constructor(
    value0: i32,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set(
      "value7",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value7))
    );
    return map;
  }
}

export class RisqOptions extends ethereum.SmartContract {
  static bind(address: Address): RisqOptions {
    return new RisqOptions("RisqOptions", address);
  }

  impliedVolRate(): BigInt {
    let result = super.call("impliedVolRate", "impliedVolRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_impliedVolRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "impliedVolRate",
      "impliedVolRate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  options(param0: BigInt): RisqOptions__optionsResult {
    let result = super.call(
      "options",
      "options(uint256):(uint8,address,uint256,uint256,uint256,uint256,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RisqOptions__optionsResult(
      result[0].toI32(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toI32()
    );
  }

  try_options(param0: BigInt): ethereum.CallResult<RisqOptions__optionsResult> {
    let result = super.tryCall(
      "options",
      "options(uint256):(uint8,address,uint256,uint256,uint256,uint256,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RisqOptions__optionsResult(
        value[0].toI32(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toI32()
      )
    );
  }

  pool(): Address {
    let result = super.call("pool", "pool():(address)", []);

    return result[0].toAddress();
  }

  try_pool(): ethereum.CallResult<Address> {
    let result = super.tryCall("pool", "pool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class SetImpliedVolRateCall extends ethereum.Call {
  get inputs(): SetImpliedVolRateCall__Inputs {
    return new SetImpliedVolRateCall__Inputs(this);
  }

  get outputs(): SetImpliedVolRateCall__Outputs {
    return new SetImpliedVolRateCall__Outputs(this);
  }
}

export class SetImpliedVolRateCall__Inputs {
  _call: SetImpliedVolRateCall;

  constructor(call: SetImpliedVolRateCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetImpliedVolRateCall__Outputs {
  _call: SetImpliedVolRateCall;

  constructor(call: SetImpliedVolRateCall) {
    this._call = call;
  }
}