type HTTP1 = {__type: 'http1'};
type HTTP2 = {__type: 'http2'};

type ServerResponse<T> = T extends HTTP2 ? HTTP2 : HTTP1;

type x = ServerResponse<HTTP2>; // {__type: 'http2'}
type y = ServerResponse<HTTP1>; // {__type: 'http1'}
type z = ServerResponse<string>; // {__type: 'http1'}
