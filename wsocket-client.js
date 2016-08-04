var WSC;
(function(window,document){
	WSC = function(url,protocol)
	{
		function _set()
		{

		}

		function _get()
		{

		}

		function _on( command, data, callback )
		{

			if( callback )
				callback(data)
			else
				_promise(data)
		}

		function _promise( res, rej )
		{
			return new Promise( function( resolve, reject ) {
				if( res )
					resolve(res)
				if( rej )
					reject(rej)
			})
		}

		return {
			set: _set,
			get: _get,
			on: _on
		}
	}
});