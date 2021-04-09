const desc = { name: 'read', path: '.' } as const

console.log(await Deno.permissions.query(desc))

export {}