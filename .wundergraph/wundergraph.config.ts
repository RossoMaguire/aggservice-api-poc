import { configureWunderGraphApplication, cors, EnvironmentVariable, introspect, templates } from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';


const shopify = introspect.graphql({
	apiNamespace: 'shopify',
	url: 'https://blueprintbetatest.myshopify.com/api/2023-01/graphql.json',
	headers: (builder) => builder.addStaticHeader('X-Shopify-Storefront-Access-Token', '3accc15150c6fadc731a4763deb6a2ee'),
  })
  
const wordpress = introspect.graphql({
	apiNamespace: 'wordpress',
	url: 'https://bpatlasprodsho.wpengine.com/graphql',
  })

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	apis: [wordpress, shopify],
	server,
	operations,
	generate: {
		codeGenerators: [],
	},
	cors: {
		...cors.allowAll,
		allowedOrigins: ['http://localhost:5173/', 'https://aggservice-product-i4kb4yik6-rossomaguire.vercel.app/'],
	},
	security: {
		enableGraphQLEndpoint: process.env.NODE_ENV !== 'production' || process.env.GITPOD_WORKSPACE_ID !== undefined,
	},
});
