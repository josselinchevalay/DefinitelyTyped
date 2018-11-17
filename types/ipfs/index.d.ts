// Type definitions for IPFS 0.33
// Project: https://github.com/ipfs/js-ipfs
// Definitions by: Josselin CHEVALAY <https://github.com/josselinchevalay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function Ipfs(options: Ipfs.NodeOptions): Ipfs.Node;

export namespace Ipfs {
  interface NodeOptions {
      /**
       * The file path at which to store the IPFS node’s data
       * @default '~/.jsipfs' 'ipfs' (in browser)
       */
      Repo?: string;

      /**
       * Initialize the repo when creating the IPFS node.
       * @default true
       */
      init?: boolean;

      /**
       * Define if node need to start automatically
       * @default false
       */
      start?: boolean;

      /**
       * Define passphare to encrypt/decrypt your keys
       * @default null
       */
      pass?: string;

      /**
       * Define circuit relay
       * @see https://github.com/ipfs/js-ipfs/tree/master/examples/circuit-relaying
       * @default { enabled: false, hop: { enabled: false, active: false } }
       */
      relay?: any;

      /**
       * Configure remote preload nodes. The remote will preload content added on this node
       * @default { enabled: true, addresses: [...] }
       */
      preload?: any;

      /**
       * Configure some experimentals feature
       * @default { pubsub: false, sharding: false, dht: false }
       */
      EXPERIMENTAL?: any;

      /**
       * Modify default IPFS node config
       * @see https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/config-nodejs.js
       */
      config?: any;

      /**
       * The libp2p option allows you to build your libp2p node by configuration, or via a bundle function
       * @see https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/libp2p-nodejs.js
       */
      libp2p?: any;

      /**
       * Configure the libp2p connection manager.
       * @see https://github.com/libp2p/js-libp2p-connection-manager#create-a-connectionmanager
       */
      connectionManager?: any;
  }

  interface FileEventResult {
    path?: string;
    hash?: string;
    size?: number;
  }

  interface File {
    path: string;
    content: any;
  }

  interface FileOption {
      /**
       * he CID version to use when storing the data (storage keys are based on the CID, including it's version)
       */
      "cid-version": number;

      /**
       * a function that will be called with the byte length of chunks as a file is added to ipfs.
       */
      progress: any;

      /**
       *  for when a Path is passed, this option can be enabled to add recursively all the files.
       */
      recursive: boolean;

      /**
       * multihash hashing algorithm to use.
       * @default sha2-256
       */
      hashAlg?: string;

      /**
       * adds a wrapping node around the content.
       */
       wrapWithDirectory: boolean;
  }

  interface Files {
    add(file: File, options: FileOption): Promise<FileEventResult[]>;
  }

  class IpfsApi {
    files?: Files;
  }

  class Node {
    on(eventType: string, callback: any): void;
    on(eventType: string): Promise<any>;
    ready(callback: any): void;
    ready(): Promise<Node>;
    start(callback: any): void;
    start(): Promise<any>;
    stop(callback: any): void;
    stop(): Promise<any>;
    error(callback: any): void;
    error(): Promise<any>;
  }
}
