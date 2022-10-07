import {
  ApolloClient,
  createHttpLink,
  gql,
  // eslint-disable-next-line prettier/prettier
  InMemoryCache
} from '@apollo/client'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('nextAuth.token')
  const response = NextResponse.next()

  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://test.frontend.api.brainny.cc/graphql',
      headers: {
        cookie: token,
      },
    }),
    cache: new InMemoryCache(),
  })

  const url = req.nextUrl.clone()

  if (
    !token &&
    (url.pathname === '/app/dashboard' ||
      url.pathname === '/app/meus-registros')
  ) {
    url.pathname = '/app/login'
    return NextResponse.redirect(url)
  }

  try {
    if (token) {
      const { data } = await client.query({
        query: gql`
          query GetMe {
            me {
              username
              role: role {
                name
              }
            }
          }
        `,
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })

      if (url.pathname === '/app/login') {
        if (data.me.role.name === 'admin') url.pathname = '/app/dashboard'
        if (data.me.role.name === 'user') url.pathname = '/app/meus-registros'

        return NextResponse.redirect(url)
      }

      if (url.pathname === '/app/dashboard' && data.me.role.name === 'user') {
        url.pathname = '/app/meus-registros'

        return NextResponse.redirect(url)
      }

      if (
        url.pathname === '/app/meus-registros' &&
        data.me.role.name === 'admin'
      ) {
        url.pathname = '/app/dashboard'

        return NextResponse.redirect(url)
      }
    }
  } catch (error) {
    console.log(error)
    response.cookies.set('nextAuth.token', '')
    response.cookies.delete('nextAuth.token')
    response.cookies.clear()

    return response
  }

  return NextResponse.next()
}
