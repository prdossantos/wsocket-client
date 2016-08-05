var WSC = {
	socket: null,
	connect: (url,protocol) => {
		if(url)
			this.socket = new WebSocket(url,protocol);	
	},
 	
	open: ( event, callback ) => {
		this.socket.onopen = ( callback ) ? callback(event) : this._promise(event)
	},

	send: (data, callback ) => {
		console.log(this.socket)
		this.socket.send(data) 
		if( callback ) 
			callback(event) 
		else 
			this._promise(event)
 	},

	receive: ( event, callback ) => {
		this.socket.onmessage = ( callback ) ? callback(event) : this._promise(event)
 	},

    _promise: ( res, rej ) => {
		return new Promise( function( resolve, reject ) {
			if( res )
				resolve(res)
			if( rej )
				reject(rej)
		})
	},
};