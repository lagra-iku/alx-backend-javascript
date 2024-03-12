export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const Buffer = new ArrayBuffer(length);
  const int8value = new Int8Array(Buffer, 0, length);
  int8value.set([value], position);
  return new DataView(Buffer);
}
