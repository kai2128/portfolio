import '@/styles/globals.scss'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useState } from 'react'
import 'default-passive-events'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60 * 24,
        retry: 1,
      },
    },
  }))
  return (
    <QueryClientProvider client={queryClient}>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LTY37NN596"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LTY37NN596');
        `}
      </Script>
      <Hydrate state={pageProps.dehydratedStates}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
