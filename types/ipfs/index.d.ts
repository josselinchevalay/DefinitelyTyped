// Type definitions for ipfs v0.33.1
// Project: https://github.com/ipfs/js-ipfs
// Definitions by: Josselin CHEVALAY <josselin54.chevalay@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export interface IpfsOptions {
    /**
     * The file path at which to store the IPFS node’s data
     * @default '~/.jsipfs' 'ipfs' (in browser)
     */
    Repo? : String 

    /**
     * Initialize the repo when creating the IPFS node.
     * @default true
     */
    init? : Boolean

    /**
     * Define if node need to start automatically
     * @default false
     */
    start? : Boolean

    /**
     * Define passphare to encrypt/decrypt your keys
     * @default null
     */
    pass? : String

    /**
     * Define circuit relay
     * @see https://github.com/ipfs/js-ipfs/tree/master/examples/circuit-relaying
     * @default { enabled: false, hop: { enabled: false, active: false } }
     */
    relay? : Object

    /**
     * Configure remote preload nodes. The remote will preload content added on this node
     * @default { enabled: true, addresses: [...] }
     */
    preload? : Object
    
    /**
     * Configure some experimentals feature
     * @default { pubsub: false, sharding: false, dht: false }
     */
    EXPERIMENTAL? : Object

    /**
     * Modify default IPFS node config 
     * @see https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/config-nodejs.js
     */
    config? : Object

    /**
     * The libp2p option allows you to build your libp2p node by configuration, or via a bundle function
     * @see https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/libp2p-nodejs.js
     */
    libp2p? : Object

    /**
     * Configure the libp2p connection manager.
     * @see https://github.com/libp2p/js-libp2p-connection-manager#create-a-connectionmanager
     */
    connectionManager? : Object
}

export module IPFS {

    interface FileResult {
        path? : String
        hash? : String
        size? : number
    }

    interface File {
        add(content: Object): Promise<Array<FileResult>>
        addReadableStream(content: Object): Promise<Array<FileResult>>
        
    }

    class Ipfs {
        constructor(options: IpfsOptions);

        files? : File

        on(eventType: String, callback: Function): void
        start(callback?: Function): Promise
        stop(callback?: Function): Promise
        error(callback?: Function): Promise
    }
}