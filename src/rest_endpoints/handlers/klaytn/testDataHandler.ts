import rpcTestData from "../../constants/klaytn_rpc_test_data";

class KlaytnTestHandler {

  constructor () {

  }

   mockAdminNodeInfo () {
    return rpcTestData.admin_nodeInfo;
  }

   mockAdminDataDir () {
    return rpcTestData.admin_datadir;
  }

   mockAdminPeers () {
    return rpcTestData.admin_peers;
  }

   mockAdminAddPeer () {
    return rpcTestData.admin_addPeer;
  }

   mockAdminRemovePeer () {
    return rpcTestData.admin_removePeer;
  }

   mockAdminStartRPC () {
    return rpcTestData.admin_startRPC;
  }

  mockAdminStopRPC() {
    return rpcTestData.admin_stopRPC;
  }
}

export default KlaytnTestHandler;
