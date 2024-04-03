#!/usr/bin/env node

import { SyncMode } from '@ethereumjs/client/dist/src/config';
import { ClientOpts } from '@ethereumjs/client/dist/src/types';

export const args: ClientOpts = {
  /**
   * Network
   * [choices: "mainnet", "goerli", "holesky", "kaustinen", "sepolia"] [default: "mainnet"]
   */
  network: 'string',

  /**
   * Network ID
   * [choices: 1, 5, 17000, 69420, 11155111]
   */
  networkId: 123456,

  /**
   * Blockchain sync mode (light sync experimental)
   * [choices: "full", "light", "none"] [default: "full"]
   */
  sync: SyncMode.Full,

  /**
   * Serve light peer requests
   * [boolean] [default: false]
   */
  lightServe: false,

  /**
   * Data directory for the blockchain
   * [default: "/Users/username/Library/Ethereum/ethereumjs"]
   */
  dataDir: './temp/ethereumjs',

  /**
   * Path to custom chain parameters json file
   * (@ethereumjs/common format)
   */
  // customChain: string,

  /**
   * Path to custom genesis state json file
   * (@ethereumjs/common format)
   */
  // customGenesisState: string,

  /**
   * Import a geth genesis file for running a custom network
   */
  // gethGenesis: string,

  /**
   * A custom trusted setup txt file for initializing the kzg library
   */
  // trustedSetup: string,

  /**
   * Place mergeForkIdTransition hardfork before (false) or after (true) Merge hardfork in the custom gethGenesis
   * [boolean] [default: true]
   */
  mergeForkIdPostMerge: true,

  /**
   * Comma-separated list of network bootnodes
   * (format: "enode://<id>@<host:port>,enode://..." ("[?discport=<port>]" not supported) or path to a bootnode.txt file
   * [array]
   */
  // bootnodes: string | string[],

  /**
   * RLPx listening port
   * [default: 30303]
   */
  port: 30303,

  /**
   * RLPx external IP
   * [string]
   */
  // extIP: 'string',

  /**
   * Network multiaddrs
   * [array]
   */
  // multiaddrs: string | string[],

  /**
   * Enable the JSON-RPC server with HTTP endpoint
   * [boolean]
   */
  rpc: true,

  /**
   * HTTP-RPC server listening port
   * [default: 8545]
   */
  rpcPort: 8545,

  /**
   * HTTP-RPC server listening interface address
   * [default: "localhost"]
   */
  rpcAddr: 'localhost',

  /**
   * Enable the JSON-RPC server with WS endpoint
   * [boolean]
   */
  // ws: boolean,

  /**
   * WS-RPC server listening port
   * [default: 8546]
   */
  wsPort: 8546,

  /**
   * WS-RPC server listening address
   * [default: "localhost"]
   */
  wsAddr: 'localhost',

  /**
   * Enable the JSON-RPC server for Engine namespace
   * [boolean]
   */
  // rpcEngine: boolean,

  /**
   * HTTP-RPC server listening port for Engine namespace
   * [number] [default: 8551]
   */
  rpcEnginePort: 8551,

  /**
   * HTTP-RPC server listening interface address for Engine namespace
   * [string] [default: "localhost"]
   */
  rpcEngineAddr: 'localhost',

  /**
   * WS-RPC server listening port for Engine namespace
   * [number] [default: 8552]
   */
  wsEnginePort: 8552,

  /**
   * WS-RPC server listening interface address for Engine namespace
   * [string] [default: "localhost"]
   */
  wsEngineAddr: 'localhost',

  /**
   * Enable jwt authentication for Engine RPC server
   * [boolean] [default: true]
   */
  rpcEngineAuth: true,

  /**
   * Provide a file containing a hex encoded jwt secret for Engine RPC server
   */
  // jwtSecret: string,

  /**
   * Display the JSON RPC help with a list of all RPC methods implemented (and exit)
   * [boolean]
   */
  // helpRpc: boolean,

  /**
   * Logging verbosity
   * [choices: "error", "warn", "info", "debug"] [default: "info"]
   */
  logLevel: 'info',

  /**
   * File to save log file (default logs to `$dataDir/ethereumjs.log`, pass false to disable)
   * [default: true]
   */
  logFile: true,

  /**
   * Log level for logFile
   * [choices: "error", "warn", "info", "debug"] [default: "debug"]
   */
  logLevelFile: 'debug',

  /**
   * Rotate log file daily  [boolean] [default: true]
   */
  logRotate: true,

  /**
   * Maximum number of log files when rotating (older will be deleted)
   * [number] [default: 5]
   */
  logMaxFiles: 5,

  /**
   * Additionally log truncated RPC calls filtered by name (prefix), e.g.: "eth,engine_getPayload" (use "all" for all methods).
   * Truncated by default, add verbosity using "rpcDebugVerbose"
   * [string] [default: ""]
   */
  rpcDebug: '',

  /**
   * Additionally log complete RPC calls filtered by name (prefix), e.g.: "eth,engine_getPayload" (use "all" for all methods).
   * [string] [default: ""]
   */
  rpcDebugVerbose: '',

  /**
   * Configure the Access-Control-Allow-Origin CORS header for RPC server
   * [string] [default: "*"]
   */
  rpcCors: '*',

  /**
   * Max items per block or header request
   * [number] [default: 100]
   */
  maxPerRequest: 100,

  /**
   * Max tasks or jobs to be created for a fetcher at a time
   * [number] [default: 100]
   */
  maxFetcherJobs: 100,

  /**
   * Peers needed before syncing
   * [number] [default: 1]
   */
  minPeers: 0,

  /**
   * Maximum peers to sync with
   * [number] [default: 25]
   */
  maxPeers: 0,

  /**
   * IPv4 address of DNS server to use when acquiring peer discovery targets
   * [string] [default: "8.8.8.8"]
   */
  dnsAddr: '8.8.8.8',

  /**
   * Start continuous VM execution (pre-Merge setting)
   * [boolean] [default: true]
   */
  execution: true,

  /**
   * Number of blocks to execute in batch mode and logged to console
   * [number] [default: 100]
   */
  numBlocksPerIteration: 100,

  /**
   * Size for the account cache (max number of accounts)
   * [number] [default: 400000]
   */
  accountCache: 400000,

  /**
   * Size for the storage cache (max number of contracts)
   * [number] [default: 200000]
   */
  storageCache: 200000,

  /**
   * Size for the code cache (max number of contracts)
   * [number] [default: 200000]
   */
  codeCache: 200000,

  /**
   * Size for the trie cache (max number of trie nodes)
   * [number] [default: 200000]
   */
  trieCache: 200000,

  /**
   * EIP-1459 ENR tree urls to query for peer discovery targets
   * [array]
   */
  // dnsNetworks: string[],

  /**
   * Debug mode for reexecuting existing blocks (no services will be started), allowed input formats: 5,5-10
   * [string]
   */
  // executeBlocks: string,

  /**
   * Generate code for local debugging (internal usage mostly)
   * [boolean] [default: false]
   */
  debugCode: false,

  /**
   * Query EIP-1459 DNS TXT records for peer discovery
   * [boolean]
   */
  // discDns: boolean,

  /**
   * Use v4 ("findneighbour" node requests) for peer discovery
   * [boolean]
   */
  // discV4: boolean,

  /**
   * Enable private custom network mining (beta)
   * [boolean]
   */
  // mine: boolean,

  /**
   * Path to file where private key (without 0x) is stored or comma separated list of accounts to unlock - currently only the first account is used
   * (for sealing PoA blocks and as the default coinbase). You will be prompted for a 0x-prefixed private key if you pass a list of accounts
   * FOR YOUR SAFETY PLEASE DO NOT USE ANY ACCOUNTS HOLDING SUBSTANTIAL AMOUNTS OF ETH
   * [string]
   */
  // unlock: string,

  /**
   * Start an ephemeral PoA blockchain with a single miner and prefunded accounts
   * [choices: "false", "true", "poa", "pow"]
   */
  dev: 'poa',

  /**
   * Address for mining rewards (etherbase). If not provided, defaults to the primary account
   * [string]
   */
  // minerCoinbase: Address,

  /**
   * Save tx receipts and logs in the meta db (warning: may use a large amount of storage).
   * With `--rpc` allows querying via eth_getLogs (max 10000 logs per request)
   * and eth_getTransactionReceipt (within`--txLookupLimit`)
   * [boolean] [default: true]
   */
  saveReceipts: true,

  /**
   * Enable/Disable storage trie prefixes (specify `false` for backward compatibility with previous states synced without prefixes)
   * [deprecated: Support for `--prefixStorageTrieKeys=false` is temporary. Please sync new instances with `prefixStorageTrieKeys` enabled]
   * [boolean] [default:true]
   */
  prefixStorageTrieKeys: true,

  /**
   * Enable snap state sync (for testing and development purposes)
   * [boolean]
   */
  // snap: boolean,

  /**
   * Use string values in the trie DB. This is old behavior, new behavior uses Uint8Arrays in the DB (more performant)
   * [deprecated: Usage of old DBs which uses string-values is temporary. Please sync new instances without this option.]
   * [boolean] [default: false]
   */
  useStringValueTrieDB: false,

  /**
   * Number of recent blocks to maintain transactions index for (default = about one year, 0 = entire chain)
   * [number] [default: 2350000]
   */
  txLookupLimit: 2350000,

  /**
   * Block number to start syncing from. Must be lower than the local chain tip.
   * Note: this is destructive and removes blocks from the blockchain, please back up your datadir before using.
   * [number]
   */
  // startBlock: number,

  /**
   * To run client in single node configuration without need to discover the sync height from peer.
   *  Particularly useful in test configurations. This flag is automically activated in the "dev" mode
   * [boolean]
   */
  // isSingleNode: boolean,

  /**
   * Report the VM profile after running each block
   * [boolean] [default: false]
   */
  vmProfileBlocks: false,

  /**
   * Report the VM profile after running each tx
   * [boolean] [default: false]
   */
  vmProfileTxs: false,

  /**
   * path to a file of RLP encoded blocks
   * [string]
   */
  // loadBlocksFromRlp: string,

  /**
   * Enable/Disable pruning engine block cache (disable for testing against hive etc)
   * [boolean] [default: true]
   */
  pruneEngineCache: true,

  // savePreimages: boolean,

  /**
   * State root of the verkle genesis genesis (experimental)
   * [string]
   */
  // verkleGenesisStateRoot: Uint8Array,

  /**
   * Run verkle+ hardforks using stateless verkle stateManager (experimental)
   * [boolean] [default: true]
   */
  statelessVerkle: true,

  /**
   * Number of unexecuted blocks (including ancestors) that can be blockingly executed in engine`s new payload (if required and possible)
   * to determine the validity of the block
   * [number]
   */
  // engineNewpayloadMaxExecute: number,

  /**
   * Skip executing blocks in new payload calls in engine, alias for --engineNewpayloadMaxExecute=0 and overrides any engineNewpayloadMaxExecute if also provided
   * [boolean]
   */
  // skipEngineExec: boolean,

  /**
   * Use pure Javascript cryptography functions
   * [boolean] [default: false]
   */
  useJsCrypto: false,
};
