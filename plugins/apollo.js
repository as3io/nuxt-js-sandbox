import { setContext } from 'apollo-link-context';


const contextLink = setContext(() => {
  const headers = {
    Authorization: 'Bearer 1fd5a684-2e95-43fe-b0da-861d78c6c567',
    'X-Tenant-Key': 'cygnus_ofcr',
  };
  return { headers };
});

export default function () {
  return {
    httpEndpoint: 'http://localhost:8937/graphql',
    link: contextLink,
  };
}
