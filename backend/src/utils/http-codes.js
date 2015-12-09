/* For reference, take a look at
 *  http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */

module.exports = {
  // success
  OK : 200,
  CREATED: 201,
  NO_CONTENT: 204,

  // redirection
  MOVED_PERMANENTLY: 301,

  // client error
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  UNPROCESSABLE_ENTITY: 422,

  // server error
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501
};
