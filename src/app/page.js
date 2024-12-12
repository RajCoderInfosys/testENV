import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h1 className="text-xl font-bold mb-4">Environment Variables</h1>
      
      <pre>
        <code>
          {`NEXT_PUBLIC_BUILDTYPE: ${process.env.NEXT_PUBLIC_BUILDTYPE}`}
          <br />
          {`DATO_CMS_GRAPHQL_CD_API_TOKEN: ${process.env.DATO_CMS_GRAPHQL_CD_API_TOKEN}`}
          <br />
          {`DATO_CMS_GRAPHQL_CD_API: ${process.env.DATO_CMS_GRAPHQL_CD_API}`}
          <br />
          {`NEXT_PUBLIC_NODE_ENV: ${process.env.NEXT_PUBLIC_NODE_ENV}`}
          <br />
          {`NEXT_PUBLIC_USPRS_API_URL: ${process.env.NEXT_PUBLIC_USPRS_API_URL}`}
          <br />
          {`NEXT_PUBLIC_IEO_VALIDATE_EMAIL_URL: ${process.env.NEXT_PUBLIC_IEO_VALIDATE_EMAIL_URL}`}
          <br />
          {`NEXT_PUBLIC_GPMS_URL: ${process.env.NEXT_PUBLIC_GPMS_URL}`}
          <br />
          {`NEXT_PUBLIC_IEO_LOGIN_URL: ${process.env.NEXT_PUBLIC_IEO_LOGIN_URL}`}
          <br />
          {`SENTRY_AUTH_TOKEN: ${process.env.SENTRY_AUTH_TOKEN}`}
          <br />
          {`NEXT_PUBLIC_MIXPANEL_TOKEN: ${process.env.NEXT_PUBLIC_MIXPANEL_TOKEN}`}
        </code>
      </pre>
    </div>
  );
}
