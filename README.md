About tRPC:

- tRPC (typescript remote procedure call): thay vì gọi API của những system với nhau thì RPC gọi function của các system với nhau (FE vs BE khác nhau). FE có thể gọi function từ BE thông qua một đối tượng nào đó.
- tRPC:

* procedure: endpoint
* query procedure: get
* mutation procedure
* context
* middleware

- điểm mạnh của tRPC là validation
- Benefit:
- Quan trọng: Type Procedure Reference
- ODM (Object document mapping)
- Schema
- Sau khi gọi api thì mình biết loại của nó và những thứ mà mình muốn trả về

- Resolver: get =
- Mutation: post | put (but no important) = change data

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Storybook:

- Giúp chúng ta xây dựng trang tài liệu nhanh chóng, ngoài ra giúp phát triển UI một cách tốt hơn và kiểm thử phần UI của mình
- Trong một trang web thì nó tách biệt độc lập với logic của ứng dụng, chủ yếu xây dựng component mà thôi

ex:
https://github.com/WebDevSimplified/storybook-react-crash-course

https://github.com/igor-lid/nextjs-typescript-storybook-tailwind-example/tree/main

https://github.com/elitizon/nextjs-tailwind-storybook
