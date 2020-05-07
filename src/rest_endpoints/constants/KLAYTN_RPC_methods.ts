const RPC_ENDPOINTS = {
  admin:{
    ADMIN_NODE_INFO: "admin_nodeInfo",
    ADMIN_DATA_DIR: "admin_datadir",
    ADMIN_PEERS: "admin_peers",
    ADMIN_ADDPEER: "admin_addpeer",
    ADMIN_REMOVE_PEER: "admin_removePeer",
    ADMIN_START_RPC: "admin_startRPC",
    ADMIN_STOP_RPC: "admin_stopRPC",
    ADMIN_START_WS: "admin_startWS",
    ADMIN_STOP_WS: "admin_stopWS",
    ADMIN_EXPORT_CHAIN: "admin_exportChain",
    ADMIN_IMPORT_CHAIN: "admin_importChain",
  },
  personal: {
    PERSONAL_IMPORT_RAWKEY: "personal_importRawKey",
    PERSONAL_LIST_ACCOUNTS: "personal_listAccounts",
    PERSONAL_NEW_ACCOUNT: "personal_newAccount",
    PERSONAL_LOCK_ACCOUNT: "personal_lockAccount",
    PERSONAL_UNLOCK_ACCOUNT: "personal_unlockAccount",
    PERSONAL_REPLACE_RAWKEY: "personal_reoplaceRawKey",
    PERSONAL_SEND_ACCOUNT_UPDATE: "personal_sendAccountUpdate",
    PERSONAL_SEND_TRANSACTION: "personal_sendTransaction",
    PERSONAL_SEND_VALUE_TRANSFER: "personal_sendValueTransfer",
    PERSONAL_SIGN: "personal_sign",
    PERSONAL_EC_RECOVER: "personal_ecRecover",
  },

  txpool: {
    TXPOOL_CONTENT: "txpool_content",
    TXPOOL_INSPECT: "txpool_inspect",
    TXPOOL_STATUS: "txpool_status"
  },

  governance: {
    GOVERNANCE_VOTE: "governance_vote",
    GOVERNANCE_SHOW_TALLY: "governance_showTally",
    GOVERNANCE_TOTAL_VOTING_POWER: "governance_totalVotingPower",
    GOVERNANCE_MY_VOTING_POWER: "governance_myVotingPower",
    GOVERNANCE_MY_VOTES: "governance_myVotes",
    GOVERNANCE_CHAIN_CONFIG: "governance_chainConfig",
    GOVERNANCE_NODE_ADDRESS: "governance_nodeAddress",
    GOVERNANCE_ITEMS_AT: "governance_itemsAt",
    GOVERNANCE_PENDING_CHANGES: "governance_pendingChanges",
    GOVERNANCE_VOTES: "governance_votes",
    GOVERNANCE_IDX_CACHE: "governance_idxCache",
    GOVERNANCE_IDX_CACHE_FROM_DB: "governance_idxCacheFromDb",
    GOVERNANCE_ITEM_CACHE_FROM_DB: "governance__itemCacheFromDb"
  }
}

export default RPC_ENDPOINTS;
