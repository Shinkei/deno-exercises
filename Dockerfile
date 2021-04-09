FROM hayd/alpine-deno:1.6.1

WORKIDIR /app

COPY . .

ENV PORT=8000

CMD ["deno", "run", "-A", "holaMundo.ts"]

EXPOSE ${PORT}