
export const EncodeToBuffer = (message:any, payload:any):Uint8Array => {
  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  const errMsg = message?.verify(payload)
  if (errMsg) throw Error(errMsg)
  // Encode a message to an Uint8Array (browser) or Buffer (node)
  return message?.encode(message?.create(payload)).finish().slice()
}

export const DecodeToObject = (message:any, data:any):any => {
  const dataMsg = message?.decode(new Uint8Array(data))
  return message?.toObject(dataMsg, {
    longs: String,
    enums: String,
    bytes: String,
  })
}