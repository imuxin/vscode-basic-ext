export function utf8_to_b64(str: string): string {
    return Buffer.from(str).toString('base64')
}

export function b64_to_utf8(str: string): string {
    return Buffer.from(str, 'base64').toString()
}
