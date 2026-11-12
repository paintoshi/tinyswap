"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1781],{41781:(e,t,i)=>{i.r(t),i.d(t,{AppKitModal:()=>iP,W3mListWallet:()=>iW,W3mModal:()=>i$,W3mModalBase:()=>iA,W3mRouterContainer:()=>iz,W3mUsageExceededView:()=>iC});var a=i(97648),r=i(78834),o=i(81004),n=i(11403),s=i(18565),c=i(43817),l=i(11446),u=i(92929),d=i(44458),p=i(94551),h=i(41300);let m={isUnsupportedChainView:()=>"UnsupportedChain"===d.I.state.view||"SwitchNetwork"===d.I.state.view&&d.I.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await h.U.isSIWXCloseDisabled()?s.W.shake():(("DataCapture"===d.I.state.view||"DataCaptureOtpConfirm"===d.I.state.view)&&p.x.disconnect(),s.W.close())}};var w=i(69148),g=i(44963),y=i(45430),f=i(3125),b=i(17008),v=i(34386),x=i(67066),k=i(74714),S=i(33452),T=i(41823),A=i(37056),$=i(16528);let P={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){let a=P.getGasPriceInEther(t,i);return b.S.bigNumber(e).times(a).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:a}){let r=b.S.bigNumber(e).times(t),o=b.S.bigNumber(a).times(i);return r.minus(o).div(r).times(100).toNumber()},getMaxSlippage(e,t){let i=b.S.bigNumber(e).div(100);return b.S.multiply(t,i).toNumber()},getProviderFee:(e,t=.0085)=>b.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!b.S.bigNumber(e).eq(0)||b.S.bigNumber(b.S.bigNumber(t||"0")).gt(e),isInsufficientSourceTokenForSwap(e,t,i){let a=i?.find(e=>e.address===t)?.quantity?.numeric;return b.S.bigNumber(a||"0").lt(e)}};var I=i(51369),C=i(25663),E=i(18715),N=i(43242);let q={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:T.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},W=(0,y.BX)({...q}),R={state:W,subscribe:e=>(0,y.B1)(W,()=>e(W)),subscribeKey:(e,t)=>(0,f.u$)(W,e,t),getParams(){let e=c.W.state.activeChain,t=c.W.getAccountData(e)?.caipAddress??c.W.state.activeCaipAddress,i=A.w.getPlainAddress(t),a=(0,S.K1)(),r=l.a.getConnectorId(c.W.state.activeChain);if(!i)throw Error("No address found to swap the tokens from.");let o=!W.toToken?.address||!W.toToken?.decimals,n=!W.sourceToken?.address||!W.sourceToken?.decimals||!b.S.bigNumber(W.sourceTokenAmount).gt(0),s=!W.sourceTokenAmount;return{networkAddress:a,fromAddress:i,fromCaipAddress:t,sourceTokenAddress:W.sourceToken?.address,toTokenAddress:W.toToken?.address,toTokenAmount:W.toTokenAmount,toTokenDecimals:W.toToken?.decimals,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:W.sourceToken?.decimals,invalidToToken:o,invalidSourceToken:n,invalidSourceTokenAmount:s,availableToSwap:t&&!o&&!n&&!s,isAuthConnector:r===v.o.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){W.sourceToken=e,W.sourceTokenAmount="",W.sourceTokenPriceInUSD=0;return}W.sourceToken=e,await O.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){W.sourceTokenAmount=e},async setToToken(e){if(!e){W.toToken=e,W.toTokenAmount="",W.toTokenPriceInUSD=0;return}W.toToken=e,await O.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){W.toTokenAmount=e?b.S.toFixed(e,6):""},async setTokenPrice(e,t){let i=W.tokensPriceMap[e]||0;i||(W.loadingPrices=!0,i=await O.getAddressPrice(e)),"sourceToken"===t?W.sourceTokenPriceInUSD=i:"toToken"===t&&(W.toTokenPriceInUSD=i),W.loadingPrices&&(W.loadingPrices=!1),O.getParams().availableToSwap&&!W.switchingTokens&&O.swapTokens()},async switchTokens(){if(!W.initializing&&W.initialized&&!W.switchingTokens){W.switchingTokens=!0;try{let e=W.toToken?{...W.toToken}:void 0,t=W.sourceToken?{...W.sourceToken}:void 0,i=e&&""===W.toTokenAmount?"1":W.toTokenAmount;O.setSourceTokenAmount(i),O.setToTokenAmount(""),await O.setSourceToken(e),await O.setToToken(t),W.switchingTokens=!1,O.swapTokens()}catch(e){throw W.switchingTokens=!1,e}}},resetState(){W.myTokensWithBalance=q.myTokensWithBalance,W.tokensPriceMap=q.tokensPriceMap,W.initialized=q.initialized,W.initializing=q.initializing,W.switchingTokens=q.switchingTokens,W.sourceToken=q.sourceToken,W.sourceTokenAmount=q.sourceTokenAmount,W.sourceTokenPriceInUSD=q.sourceTokenPriceInUSD,W.toToken=q.toToken,W.toTokenAmount=q.toTokenAmount,W.toTokenPriceInUSD=q.toTokenPriceInUSD,W.networkPrice=q.networkPrice,W.networkTokenSymbol=q.networkTokenSymbol,W.networkBalanceInUSD=q.networkBalanceInUSD,W.inputError=q.inputError},resetValues(){let{networkAddress:e}=O.getParams(),t=W.tokens?.find(t=>t.address===e);O.setSourceToken(t),O.setToToken(void 0)},getApprovalLoadingState:()=>W.loadingApprovalTransaction,clearError(){W.transactionError=void 0},async initializeState(){if(!W.initializing){if(W.initializing=!0,!W.initialized)try{await O.fetchTokens(),W.initialized=!0}catch(e){W.initialized=!1,g.P.showError("Failed to initialize swap"),d.I.goBack()}W.initializing=!1}},async fetchTokens(){let{networkAddress:e}=O.getParams();await O.getNetworkTokenPrice(),await O.getMyTokensWithBalance();let t=W.myTokensWithBalance?.find(t=>t.address===e);t&&(W.networkTokenSymbol=t.symbol,O.setSourceToken(t),O.setSourceTokenAmount("0"))},async getTokenList(){let e=c.W.state.activeCaipNetwork?.caipNetworkId;if(W.caipNetworkId!==e||!W.tokens)try{W.tokensLoading=!0;let t=await $.s.getTokenList(e);W.tokens=t,W.caipNetworkId=e,W.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol));let i=(e&&T.oU.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e),a=(T.oU.SWAP_SUGGESTED_TOKENS||[]).map(e=>t.find(t=>t.symbol===e)).filter(e=>!!e).filter(e=>!i.some(t=>t.address===e.address));W.suggestedTokens=[...i,...a]}catch(e){W.tokens=[],W.popularTokens=[],W.suggestedTokens=[]}finally{W.tokensLoading=!1}},async getAddressPrice(e){let t=W.tokensPriceMap[e];if(t)return t;let i=await E.T.fetchTokenPrice({addresses:[e]}),a=i?.fungibles||[],r=[...W.tokens||[],...W.myTokensWithBalance||[]],o=r?.find(t=>t.address===e)?.symbol,n=parseFloat((a.find(e=>e.symbol.toLowerCase()===o?.toLowerCase())?.price||0).toString());return W.tokensPriceMap[e]=n,n},async getNetworkTokenPrice(){let{networkAddress:e}=O.getParams(),t=await E.T.fetchTokenPrice({addresses:[e]}).catch(()=>(g.P.showError("Failed to fetch network token price"),{fungibles:[]})),i=t.fungibles?.[0],a=i?.price.toString()||"0";W.tokensPriceMap[e]=parseFloat(a),W.networkTokenSymbol=i?.symbol||"",W.networkPrice=a},async getMyTokensWithBalance(e){let t=await k.Z.getMyTokensWithBalance({forceUpdate:e,caipNetwork:c.W.state.activeCaipNetwork,address:c.W.getAccountData()?.address}),i=$.s.mapBalancesToSwapTokens(t);i&&(await O.getInitialGasPrice(),O.setBalances(i))},setBalances(e){let{networkAddress:t}=O.getParams(),i=c.W.state.activeCaipNetwork;if(!i)return;let a=e.find(e=>e.address===t);e.forEach(e=>{W.tokensPriceMap[e.address]=e.price||0}),W.myTokensWithBalance=e.filter(e=>e.address.startsWith(i.caipNetworkId)),W.networkBalanceInUSD=a?b.S.multiply(a.quantity.numeric,a.price).toString():"0"},async getInitialGasPrice(){let e=await $.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(c.W.state?.activeCaipNetwork?.chainNamespace){case v.o.CHAIN.SOLANA:return W.gasFee=e.standard??"0",W.gasPriceInUSD=b.S.multiply(e.standard,W.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(W.gasFee),gasPriceInUSD:Number(W.gasPriceInUSD)};case v.o.CHAIN.EVM:default:let t=e.standard??"0",i=BigInt(t),a=BigInt(15e4),r=P.getGasPriceInUSD(W.networkPrice,a,i);return W.gasFee=t,W.gasPriceInUSD=r,{gasPrice:i,gasPriceInUSD:r}}},async swapTokens(){let e=c.W.getAccountData()?.address,t=W.sourceToken,i=W.toToken,a=b.S.bigNumber(W.sourceTokenAmount).gt(0);if(a||O.setToTokenAmount(""),!i||!t||W.loadingPrices||!a||!e)return;W.loadingQuote=!0;let r=b.S.bigNumber(W.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{let a=await E.T.fetchSwapQuote({userAddress:e,from:t.address,to:i.address,gasPrice:W.gasFee,amount:r.toString()});W.loadingQuote=!1;let o=a?.quotes?.[0]?.toAmount;if(!o)return void C.h.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");let n=b.S.bigNumber(o).div(10**i.decimals).toString();O.setToTokenAmount(n),O.hasInsufficientToken(W.sourceTokenAmount,t.address)?W.inputError="Insufficient balance":(W.inputError=void 0,O.setTransactionDetails())}catch(t){let e=await $.s.handleSwapError(t);W.loadingQuote=!1,W.inputError=e||"Insufficient balance"}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=O.getParams(),i=W.sourceToken,a=W.toToken;if(e&&t&&i&&a&&!W.loadingQuote)try{let t;return W.loadingBuildTransaction=!0,t=await $.s.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:i.decimals})?await O.createSwapTransaction():await O.createAllowanceTransaction(),W.loadingBuildTransaction=!1,W.fetchError=!1,t}catch(e){d.I.goBack(),g.P.showError("Failed to check allowance"),W.loadingBuildTransaction=!1,W.approvalTransaction=void 0,W.swapTransaction=void 0,W.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=O.getParams();if(e&&i){if(!t)throw Error("createAllowanceTransaction - No source token address found.");try{let a=await E.T.generateApproveCalldata({from:t,to:i,userAddress:e}),r=A.w.getPlainAddress(a.tx.from);if(!r)throw Error("SwapController:createAllowanceTransaction - address is required");let o={data:a.tx.data,to:r,gasPrice:BigInt(a.tx.eip155.gasPrice),value:BigInt(a.tx.value),toAmount:W.toTokenAmount};return W.swapTransaction=void 0,W.approvalTransaction={data:o.data,to:o.to,gasPrice:o.gasPrice,value:o.value,toAmount:o.toAmount},{data:o.data,to:o.to,gasPrice:o.gasPrice,value:o.value,toAmount:o.toAmount}}catch(e){d.I.goBack(),g.P.showError("Failed to create approval transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,W.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=O.getParams(),a=W.sourceToken,r=W.toToken;if(!t||!i||!a||!r)return;let o=p.x.parseUnits(i,a.decimals)?.toString();try{let i=await E.T.generateSwapCalldata({userAddress:t,from:a.address,to:r.address,amount:o,disableEstimate:!0}),n=a.address===e,s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice),l=A.w.getPlainAddress(i.tx.to);if(!l)throw Error("SwapController:createSwapTransaction - address is required");let u={data:i.tx.data,to:l,gas:s,gasPrice:c,value:n?BigInt(o??"0"):BigInt("0"),toAmount:W.toTokenAmount};return W.gasPriceInUSD=P.getGasPriceInUSD(W.networkPrice,s,c),W.approvalTransaction=void 0,W.swapTransaction=u,u}catch(e){d.I.goBack(),g.P.showError("Failed to create transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,W.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){g.P.showLoading("Approve limit increase in your wallet"),d.I.replace("SwapPreview")},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:i}=O.getParams();W.loadingApprovalTransaction=!0,i?d.I.pushTransactionStack({onSuccess:O.onEmbeddedWalletApprovalSuccess}):g.P.showLoading("Approve limit increase in your wallet");try{await p.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.o.CHAIN.EVM}),await O.swapTokens(),await O.getTransaction(),W.approvalTransaction=void 0,W.loadingApprovalTransaction=!1}catch(e){W.transactionError=e?.displayMessage,W.loadingApprovalTransaction=!1,g.P.showError(e?.displayMessage||"Transaction error"),N.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:O.state.sourceToken?.symbol||"",swapToToken:O.state.toToken?.symbol||"",swapFromAmount:O.state.sourceTokenAmount||"",swapToAmount:O.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:i,isAuthConnector:a}=O.getParams();W.loadingTransaction=!0;let r=`Swapping ${W.sourceToken?.symbol} to ${b.S.formatNumberToLocalString(i,3)} ${W.toToken?.symbol}`,o=`Swapped ${W.sourceToken?.symbol} to ${b.S.formatNumberToLocalString(i,3)} ${W.toToken?.symbol}`;a?d.I.pushTransactionStack({onSuccess(){d.I.replace("Account"),g.P.showLoading(r),R.resetState()}}):g.P.showLoading("Confirm transaction in your wallet");try{let i=[W.sourceToken?.address,W.toToken?.address].join(","),r=await p.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.o.CHAIN.EVM});return W.loadingTransaction=!1,g.P.showSuccess(o),N.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:O.state.sourceToken?.symbol||"",swapToToken:O.state.toToken?.symbol||"",swapFromAmount:O.state.sourceTokenAmount||"",swapToAmount:O.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),R.resetState(),a||d.I.replace("Account"),R.getMyTokensWithBalance(i),r}catch(e){W.transactionError=e?.displayMessage,W.loadingTransaction=!1,g.P.showError(e?.displayMessage||"Transaction error"),N.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:O.state.sourceToken?.symbol||"",swapToToken:O.state.toToken?.symbol||"",swapFromAmount:O.state.sourceTokenAmount||"",swapToAmount:O.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken:(e,t)=>P.isInsufficientSourceTokenForSwap(e,t,W.myTokensWithBalance),setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=O.getParams();e&&t&&(W.gasPriceInUSD=P.getGasPriceInUSD(W.networkPrice,BigInt(W.gasFee),BigInt(15e4)),W.priceImpact=P.getPriceImpact({sourceTokenAmount:W.sourceTokenAmount,sourceTokenPriceInUSD:W.sourceTokenPriceInUSD,toTokenPriceInUSD:W.toTokenPriceInUSD,toTokenAmount:W.toTokenAmount}),W.maxSlippage=P.getMaxSlippage(W.slippage,W.toTokenAmount),W.providerFee=P.getProviderFee(W.sourceTokenAmount))}},O=(0,I.X)(R);var z=i(63495),M=i(74089),D=i(94895),F=i(69428),U=i(34175);let j=(0,U.AH)`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`,B=class extends M.WF{render(){return(0,M.qy)`<slot></slot>`}};B.styles=[D.W5,j],B=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,F.E)("wui-card")],B),i(74970);var L=i(37917),H=i(23961);i(88081),i(15769),i(47002);let _=(0,U.AH)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var Z=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let V={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},K=class extends M.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return(0,M.qy)`
      <wui-flex
        data-type=${(0,H.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${V[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){C.h.close()}};K.styles=[D.W5,_],Z([(0,L.MZ)()],K.prototype,"message",void 0),Z([(0,L.MZ)()],K.prototype,"type",void 0),K=Z([(0,F.E)("wui-alertbar")],K);let Q=(0,z.AH)`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e["3"]};
    left: ${({spacing:e})=>e["4"]};
    right: ${({spacing:e})=>e["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var G=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Y={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},J=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.open=C.h.state.open,this.onOpen(!0),this.unsubscribe.push(C.h.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=C.h.state,i=Y[t];return(0,a.qy)`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};J.styles=Q,G([(0,r.wk)()],J.prototype,"open",void 0),J=G([(0,z.EM)("w3m-alertbar")],J);var X=i(48789),ee=i(76581);let et=(0,U.AH)`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var ei=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ea=class extends M.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return(0,M.qy)`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,H.J)(this.iconSize)}></wui-icon>
    </button>`}};ea.styles=[D.W5,D.fD,et],ei([(0,L.MZ)()],ea.prototype,"icon",void 0),ei([(0,L.MZ)()],ea.prototype,"variant",void 0),ei([(0,L.MZ)()],ea.prototype,"type",void 0),ei([(0,L.MZ)()],ea.prototype,"size",void 0),ei([(0,L.MZ)()],ea.prototype,"iconSize",void 0),ei([(0,L.MZ)({type:Boolean})],ea.prototype,"fullWidth",void 0),ei([(0,L.MZ)({type:Boolean})],ea.prototype,"disabled",void 0),ea=ei([(0,F.E)("wui-icon-button")],ea),i(88364);let er=(0,U.AH)`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var eo=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let en={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},es={lg:"lg",md:"md",sm:"sm"},ec=class extends M.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return(0,M.qy)`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let e=en[this.size];return this.text?(0,M.qy)`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return(0,M.qy)`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let e=es[this.size];return(0,M.qy)` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};ec.styles=[D.W5,D.fD,er],eo([(0,L.MZ)()],ec.prototype,"imageSrc",void 0),eo([(0,L.MZ)()],ec.prototype,"text",void 0),eo([(0,L.MZ)()],ec.prototype,"size",void 0),eo([(0,L.MZ)()],ec.prototype,"type",void 0),eo([(0,L.MZ)({type:Boolean})],ec.prototype,"disabled",void 0),ec=eo([(0,F.E)("wui-select")],ec),i(54623),i(3658);var el=i(41463);let eu={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==el&&void 0!==el.env?el.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};i(36424),i(87850);var ed=i(73018),ep=i(42608),eh=i(97734),em=i(85953);i(66449),i(94548);let ew=(0,U.AH)`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var eg=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ey=class extends M.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return(0,M.qy)`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};ey.styles=[D.W5,D.fD,ew],eg([(0,L.MZ)()],ey.prototype,"size",void 0),eg([(0,L.MZ)({type:Boolean})],ey.prototype,"disabled",void 0),eg([(0,L.MZ)()],ey.prototype,"icon",void 0),eg([(0,L.MZ)()],ey.prototype,"iconColor",void 0),eg([(0,L.MZ)()],ey.prototype,"variant",void 0),ey=eg([(0,F.E)("wui-icon-link")],ey),i(61327),i(88844);let ef=(0,M.JW)`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var eb=i(31320);let ev=(0,M.JW)`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ex=(0,U.AH)`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ek=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let eS=class extends M.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:ev,md:eb.a,lg:ef},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,(0,M.qy)`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?(0,M.qy)`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:(0,M.qy)`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};eS.styles=[D.W5,ex],ek([(0,L.MZ)()],eS.prototype,"size",void 0),ek([(0,L.MZ)()],eS.prototype,"name",void 0),ek([(0,L.MZ)({type:Object})],eS.prototype,"networkImagesBySize",void 0),ek([(0,L.MZ)()],eS.prototype,"imageSrc",void 0),ek([(0,L.MZ)({type:Boolean})],eS.prototype,"selected",void 0),ek([(0,L.MZ)({type:Boolean})],eS.prototype,"round",void 0),eS=ek([(0,F.E)("wui-network-image")],eS);let eT=(0,U.AH)`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var eA=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let e$=class extends M.WF{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,(0,M.qy)`${this.template()}`}template(){return this.text?(0,M.qy)`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};e$.styles=[D.W5,eT],eA([(0,L.MZ)()],e$.prototype,"text",void 0),eA([(0,L.MZ)()],e$.prototype,"bgColor",void 0),e$=eA([(0,F.E)("wui-separator")],e$),i(18128);var eP=i(30840),eI=i(60890);let eC="INVALID_PAYMENT_CONFIG",eE="INVALID_RECIPIENT",eN="INVALID_ASSET",eq="INVALID_AMOUNT",eW="UNABLE_TO_INITIATE_PAYMENT",eR="INVALID_CHAIN_NAMESPACE",eO="GENERIC_PAYMENT_ERROR",ez="UNABLE_TO_GET_EXCHANGES",eM="ASSET_NOT_SUPPORTED",eD="UNABLE_TO_GET_PAY_URL",eF="UNABLE_TO_GET_BUY_STATUS",eU="UNABLE_TO_GET_QUOTE",ej="UNABLE_TO_GET_QUOTE_STATUS",eB="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",eL={[eC]:"Invalid payment configuration",[eE]:"Invalid recipient address",[eN]:"Invalid asset specified",[eq]:"Invalid payment amount",[eB]:"Invalid recipient address for the asset selected",UNKNOWN_ERROR:"Unknown payment error occurred",[eW]:"Unable to initiate payment",[eR]:"Invalid chain namespace",[eO]:"Unable to process payment",[ez]:"Unable to get exchanges",[eM]:"Asset not supported by the selected exchange",[eD]:"Unable to get payment URL",[eF]:"Unable to get buy status",UNABLE_TO_GET_TOKEN_BALANCES:"Unable to get token balances",[eU]:"Unable to get quote. Please choose a different token",[ej]:"Unable to get quote status"};class eH extends Error{get message(){return eL[this.code]}constructor(e,t){super(eL[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,eH)}}var e_=i(75821);let eZ="reown_test";var eV=i(92087),eK=i(79954);async function eQ(e,t,i){if(t!==v.o.CHAIN.EVM)throw new eH(eR);if(!i.fromAddress)throw new eH(eC,"fromAddress is required for native EVM payments.");let a="string"==typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(a))throw new eH(eC);let r=e.metadata?.decimals??18,o=p.x.parseUnits(a.toString(),r);if("bigint"!=typeof o)throw new eH(eO);return await p.x.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:o,data:"0x"})??void 0}async function eG(e,t){if(!t.fromAddress)throw new eH(eC,"fromAddress is required for ERC20 EVM payments.");let i=e.asset,a=t.recipient,r=Number(e.metadata.decimals),o=p.x.parseUnits(t.amount.toString(),r);if(void 0===o)throw new eH(eO);return await p.x.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[a,o],method:"transfer",abi:eV.v.getERC20Abi(i),chainNamespace:v.o.CHAIN.EVM})??void 0}async function eY(e,t){if(e!==v.o.CHAIN.SOLANA)throw new eH(eR);if(!t.fromAddress)throw new eH(eC,"fromAddress is required for Solana payments.");let i="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new eH(eC,"Invalid payment amount.");try{if(!eK.G.getProvider(e))throw new eH(eO,"No Solana provider available.");let a=await p.x.sendTransaction({chainNamespace:v.o.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!a)throw new eH(eO,"Transaction failed.");return a}catch(e){if(e instanceof eH)throw e;throw new eH(eO,`Solana payment failed: ${e}`)}}async function eJ({sourceToken:e,toToken:t,amount:i,recipient:a}){let r=p.x.parseUnits(i,e.metadata.decimals),o=p.x.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:tc,origin:{amount:r?.toString()??"0",currency:e},destination:{amount:o?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:tc,type:"deposit",deposit:{amount:r?.toString()??"0",currency:e.asset,receiver:a}}],timeInSeconds:6})}function eX(e){if(!e)return null;let t=e.steps[0];return t&&t.type===tl?t:null}function e0(e,t=0){if(!e)return[];let i=e.steps.filter(e=>e.type===tu),a=i.filter((e,i)=>i+1>t);return i.length>0&&i.length<3?a:[]}let e3=new e_.Z({baseUrl:A.w.getApiUrl(),clientId:null});class e1 extends Error{}function e2(){let{projectId:e,sdkType:t,sdkVersion:i}=n.H.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function e4(e,t){let i,a=(i=n.H.getSnapshot().projectId,`https://rpc.walletconnect.org/v1/json-rpc?projectId=${i}`),{sdkType:r,sdkVersion:o,projectId:s}=n.H.getSnapshot(),c={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:r,sv:o,projectId:s}},l=await fetch(a,{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}),u=await l.json();if(u.error)throw new e1(u.error.message);return u}async function e5(e){return(await e4("reown_getExchanges",e)).result}async function e6(e){return(await e4("reown_getExchangePayUrl",e)).result}async function e8(e){return(await e4("reown_getExchangeBuyStatus",e)).result}async function e7(e){let t=b.S.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:a}=eP.C.parseCaipNetworkId(e.sourceToken.network),{chainId:r,chainNamespace:o}=eP.C.parseCaipNetworkId(e.toToken.network),n="native"===e.sourceToken.asset?(0,S.NH)(a):e.sourceToken.asset,s="native"===e.toToken.asset?(0,S.NH)(o):e.toToken.asset;return await e3.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:n,destinationChainId:r.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:e2()})}async function e9(e){let t=eI.y.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=eI.y.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?eJ(e):e7(e)}async function te(e){return await e3.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...e2()}})}async function tt(e){return await e3.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:e2()})}let ti=["eip155","solana"],ta={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},tr={56:"714",204:"714"};function to(e,t){let{chainNamespace:i,chainId:a}=eP.C.parseCaipNetworkId(e),r=ta[i];if(!r)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let o=r.native.assetNamespace,n=r.native.assetReference;"native"!==t?(o=r.defaultTokenNamespace,n=t):"eip155"===i&&tr[a]&&(n=tr[a]);let s=`${i}:${a}`;return`${s}/${o}:${n}`}function tn(e){let t=b.S.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}let ts="unknown",tc="direct-transfer",tl="deposit",tu="transaction",td=(0,y.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[v.o.CHAIN.EVM]:[],[v.o.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),tp={state:td,subscribe:e=>(0,y.B1)(td,()=>e(td)),subscribeKey:(e,t)=>(0,f.u$)(td,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){let{chainNamespace:e}=eP.C.parseCaipNetworkId(tp.state.paymentAsset.network);if(!A.w.isAddress(tp.state.recipient,e))throw new eH(eB,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),td.isConfigured=!0,N.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:td.exchanges,configuration:{network:td.paymentAsset.network,asset:td.paymentAsset.asset,recipient:td.recipient,amount:td.amount}}}),await s.W.open({view:"Pay"})},resetState(){td.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},td.recipient="0x0",td.amount=0,td.isConfigured=!1,td.error=null,td.isPaymentInProgress=!1,td.isLoading=!1,td.currentPayment=void 0,td.selectedExchange=void 0,td.exchangeUrlForQuote=void 0,td.requestId=void 0},resetQuoteState(){td.quote=void 0,td.quoteStatus="waiting",td.quoteError=null,td.isFetchingQuote=!1,td.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new eH(eC);try{td.choice=e.choice??"pay",td.paymentAsset=e.paymentAsset,td.recipient=e.recipient,td.amount=e.amount,td.openInNewTab=e.openInNewTab??!0,td.redirectUrl=e.redirectUrl,td.payWithExchange=e.payWithExchange,td.error=null}catch(e){throw new eH(eC,e.message)}},setSelectedPaymentAsset(e){td.selectedPaymentAsset=e},setSelectedExchange(e){td.selectedExchange=e},setRequestId(e){td.requestId=e},setPaymentInProgress(e){td.isPaymentInProgress=e},getPaymentAsset:()=>td.paymentAsset,getExchanges:()=>td.exchanges,async fetchExchanges(){try{td.isLoading=!0,td.exchanges=(await e5({page:0})).exchanges.slice(0,2)}catch(e){throw g.P.showError(eL.UNABLE_TO_GET_EXCHANGES),new eH(ez)}finally{td.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?to(e.network,e.asset):void 0;return await e5({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new eH(ez)}},async getPayUrl(e,t,i=!1){try{let a=Number(t.amount),r=await e6({exchangeId:e,asset:to(t.network,t.asset),amount:a.toString(),recipient:`${t.network}:${t.recipient}`});return N.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),N.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:td.paymentId||ts,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new eH(eM);throw Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:a}){let r=await e6({exchangeId:e,asset:to(t.network,t.asset),amount:i.toString(),recipient:a});td.exchangeSessionId=r.sessionId,td.exchangeUrlForQuote=r.url},async openPayUrl(e,t,i=!1){try{let a=await this.getPayUrl(e.exchangeId,t,i);if(!a)throw new eH(eD);let r=e.openInNewTab??!0;return A.w.openHref(a.url,r?"_blank":"_self"),a}catch(e){throw e instanceof eH?td.error=e.message:td.error=eL.GENERIC_PAYMENT_ERROR,new eH(eD)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:a,paymentAsset:r}){if(td.currentPayment={type:"wallet",status:"IN_PROGRESS"},!td.isPaymentInProgress)try{this.initiatePayment();let o=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===r.network);if(!o)throw Error("Target network not found");let n=c.W.state.activeCaipNetwork;switch(!eI.y.isLowerCaseMatch(n?.caipNetworkId,o.caipNetworkId)&&await c.W.switchActiveNetwork(o),e){case v.o.CHAIN.EVM:"native"===r.asset&&(td.currentPayment.result=await eQ(r,e,{recipient:i,amount:a,fromAddress:t})),r.asset.startsWith("0x")&&(td.currentPayment.result=await eG(r,{recipient:i,amount:a,fromAddress:t})),td.currentPayment.status="SUCCESS";break;case v.o.CHAIN.SOLANA:td.currentPayment.result=await eY(e,{recipient:i,amount:a,fromAddress:t,tokenMint:"native"===r.asset?void 0:r.asset}),td.currentPayment.status="SUCCESS";break;default:throw new eH(eR)}}catch(e){throw e instanceof eH?td.error=e.message:td.error=eL.GENERIC_PAYMENT_ERROR,td.currentPayment.status="FAILED",g.P.showError(td.error),e}finally{td.isPaymentInProgress=!1}},async onSendTransaction(e){try{let{namespace:t,transactionStep:i}=e;tp.initiatePayment();let a=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===td.paymentAsset?.network);if(!a)throw Error("Target network not found");let r=c.W.state.activeCaipNetwork;if(eI.y.isLowerCaseMatch(r?.caipNetworkId,a.caipNetworkId)||await c.W.switchActiveNetwork(a),t===v.o.CHAIN.EVM){let{from:e,to:a,data:r,value:o}=i.transaction;await p.x.sendTransaction({address:e,to:a,data:r,value:BigInt(o),chainNamespace:t})}else if(t===v.o.CHAIN.SOLANA){let{instructions:e}=i.transaction;await p.x.writeSolanaTransaction({instructions:e})}}catch(e){throw e instanceof eH?td.error=e.message:td.error=eL.GENERIC_PAYMENT_ERROR,g.P.showError(td.error),e}finally{td.isPaymentInProgress=!1}},getExchangeById:e=>td.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:i,amount:a}=e;if(!t)throw new eH(eC);if(!i)throw new eH(eE);if(!t.asset)throw new eH(eN);if(null==a||a<=0)throw new eH(eq)},async handlePayWithExchange(e){try{td.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:i}=td.paymentAsset,a={network:t,asset:i,amount:td.amount,recipient:td.recipient},r=await this.getPayUrl(e,a);if(!r)throw new eH(eW);return td.currentPayment.sessionId=r.sessionId,td.currentPayment.status="IN_PROGRESS",td.currentPayment.exchangeId=e,this.initiatePayment(),{url:r.url,openInNewTab:td.openInNewTab}}catch(e){return e instanceof eH?td.error=e.message:td.error=eL.GENERIC_PAYMENT_ERROR,td.isPaymentInProgress=!1,g.P.showError(td.error),null}},async getBuyStatus(e,t){try{let i=await e8({sessionId:t,exchangeId:e});return("SUCCESS"===i.status||"FAILED"===i.status)&&N.E.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?A.w.parseError(td.error):void 0,source:"pay",paymentId:td.paymentId||ts,configuration:{network:td.paymentAsset.network,asset:td.paymentAsset.asset,recipient:td.recipient,amount:td.amount},currentPayment:{type:"exchange",exchangeId:td.currentPayment?.exchangeId,sessionId:td.currentPayment?.sessionId,result:i.txHash}}}),i}catch(e){throw new eH(eF)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];let{address:a}=eP.C.parseCaipAddress(e),r=t;return i===v.o.CHAIN.EVM&&(r=void 0),await k.Z.getMyTokensWithBalance({address:a,caipNetwork:r})},async fetchTokensFromExchange(){if(!td.selectedExchange)return[];let e=Object.values((await tt(td.selectedExchange.id)).assets).flat();return await Promise.all(e.map(async e=>{let t={chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:e.metadata.decimals.toString()}},{chainNamespace:i}=eP.C.parseCaipNetworkId(t.chainId),a=t.address;if(A.w.isCaipAddress(a)){let{address:e}=eP.C.parseCaipAddress(a);a=e}return t.iconUrl=await X.$.getImageByToken(a??"",i).catch(()=>void 0)??"",t}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{td.isFetchingTokenBalances=!0;let a=td.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}),r=await a;td.tokenBalances={...td.tokenBalances,[i]:r}}catch(t){let e=t instanceof Error?t.message:"Unable to get token balances";g.P.showError(e)}finally{td.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:a,recipient:r}){try{tp.resetQuoteState(),td.isFetchingQuote=!0;let o=await e9({amount:e,address:td.selectedExchange?void 0:t,sourceToken:i,toToken:a,recipient:r});if(td.selectedExchange){let e=eX(o);if(e){let t=`${i.network}:${e.deposit.receiver}`,a=b.S.formatNumber(e.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await tp.generateExchangeUrlForQuote({exchangeId:td.selectedExchange.id,paymentAsset:i,amount:a.toString(),recipient:t})}}td.quote=o}catch(t){let e=eL.UNABLE_TO_GET_QUOTE;if(t instanceof Error&&t.cause&&t.cause instanceof Response)try{let i=await t.cause.json();i.error&&"string"==typeof i.error&&(e=i.error)}catch{}throw td.quoteError=e,g.P.showError(e),new eH(eU)}finally{td.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===tc){let e=td.selectedExchange,t=td.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:td.quoteStatus="waiting";break;case"SUCCESS":td.quoteStatus="success",td.isPaymentInProgress=!1;break;case"FAILED":td.quoteStatus="failure",td.isPaymentInProgress=!1}return}td.quoteStatus="success";return}let{status:t}=await te({requestId:e});td.quoteStatus=t}catch{throw td.quoteStatus="failure",new eH(ej)}},initiatePayment(){td.isPaymentInProgress=!0,td.paymentId=crypto.randomUUID()},initializeAnalytics(){td.analyticsSet||(td.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(td.currentPayment?.status&&"UNKNOWN"!==td.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[td.currentPayment.status];N.E.sendEvent({type:"track",event:e,properties:{message:"FAILED"===td.currentPayment.status?A.w.parseError(td.error):void 0,source:"pay",paymentId:td.paymentId||ts,configuration:{network:td.paymentAsset.network,asset:td.paymentAsset.asset,recipient:td.recipient,amount:td.amount},currentPayment:{type:td.currentPayment.type,exchangeId:td.currentPayment.exchangeId,sessionId:td.currentPayment.sessionId,result:td.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!td.paymentAsset.metadata.logoURI)try{let{chainNamespace:e}=eP.C.parseCaipNetworkId(td.paymentAsset.network),t=await X.$.getImageByToken(td.paymentAsset.asset,e);td.paymentAsset.metadata.logoURI=t}catch{}}},th=(0,z.AH)`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var tm=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tw=class extends ed.WF{constructor(){super(),this.unsubscribe=[],this.amount=tp.state.amount,this.namespace=void 0,this.paymentAsset=tp.state.paymentAsset,this.activeConnectorIds=l.a.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=tp.state.exchanges,this.isLoading=tp.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(tp.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(l.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(tp.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(tp.subscribeKey("isLoading",e=>this.isLoading=e)),tp.fetchExchanges(),tp.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,ed.qy)`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return(0,ed.qy)`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.unsubscribe.push(c.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){let e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return(0,ed.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${tn(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,em.J)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,em.J)(X.$.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return!function(e){let{chainNamespace:t}=eP.C.parseCaipNetworkId(e);return ti.includes(t)}(this.paymentAsset.network)?(0,ed.qy)``:this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate()}connectedWalletTemplate(){let{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,em.J)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return(0,ed.qy)`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return(0,ed.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(e=>{var t;let i;return(t=this.paymentAsset,(i=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t.network))&&i.testnet)?e.id===eZ:e.id!==eZ});return 0===e.length?(0,ed.qy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>(0,ed.qy)`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,em.J)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return(0,ed.qy)`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error("Namespace not found");this.caipAddress?d.I.push("PayQuote"):(await l.a.connect(),await s.W.open({view:"PayQuote"}))}onExchangePayment(e){tp.setSelectedExchange(e),d.I.push("PayQuote")}async onDisconnect(){try{await p.x.disconnect(),await s.W.open({view:"Pay"})}catch{console.error("Failed to disconnect"),g.P.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=l.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let a=X.$.getConnectorImage(i);return{name:i.name,image:a}}};tw.styles=th,tm([(0,eh.w)()],tw.prototype,"amount",void 0),tm([(0,eh.w)()],tw.prototype,"namespace",void 0),tm([(0,eh.w)()],tw.prototype,"paymentAsset",void 0),tm([(0,eh.w)()],tw.prototype,"activeConnectorIds",void 0),tm([(0,eh.w)()],tw.prototype,"caipAddress",void 0),tm([(0,eh.w)()],tw.prototype,"exchanges",void 0),tm([(0,eh.w)()],tw.prototype,"isLoading",void 0),tw=tm([(0,z.EM)("w3m-pay-view")],tw);var tg=i(2577);let ty=(0,U.AH)`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var tf=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tb={"accent-primary":U.f.tokens.core.backgroundAccentPrimary},tv=class extends M.WF{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){let e=tb[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `;let t=Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings));return(0,M.qy)`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){let i=e/t*this.duration,a=`animation-delay: ${i}s;`;return(0,M.qy)`<div class="pulse-ring" style=${a}></div>`}};tv.styles=[D.W5,ty],tf([(0,L.MZ)({type:Number})],tv.prototype,"rings",void 0),tf([(0,L.MZ)({type:Number})],tv.prototype,"duration",void 0),tf([(0,L.MZ)({type:Number})],tv.prototype,"opacity",void 0),tf([(0,L.MZ)()],tv.prototype,"size",void 0),tf([(0,L.MZ)()],tv.prototype,"variant",void 0),tv=tf([(0,F.E)("wui-pulse")],tv);let tx=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],tk=["success","submitted","failure","timeout","refund"],tS=(0,z.AH)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var tT=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tA={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},t$=class extends ed.WF{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=tp.state.paymentAsset,this.quoteStatus=tp.state.quoteStatus,this.quote=tp.state.quote,this.amount=tp.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.a.state.activeConnectorIds,this.selectedExchange=tp.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(tp.subscribeKey("quoteStatus",e=>this.quoteStatus=e),tp.subscribeKey("quote",e=>this.quote=e),l.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),tp.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return(0,ed.qy)`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=tn(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",i=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?(0,ed.qy)`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?(0,ed.qy)`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:(0,ed.qy)`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,em.J)(X.$.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return(0,ed.qy)`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,t="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(e)return(0,ed.qy)`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(t)return(0,ed.qy)`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;let i=this.quote?.timeInSeconds??0;return(0,ed.qy)`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${i} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let e=c.W.getAllRequestedCaipNetworks().find(e=>{let t=this.quote?.origin.currency.network;if(!t)return!1;let{chainId:i}=eP.C.parseCaipNetworkId(t);return eI.y.isLowerCaseMatch(e.id.toString(),i.toString())}),t=tn(b.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),i=this.quote?.origin.currency.metadata.symbol??"Unknown";return(0,ed.qy)`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${i}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,em.J)(X.$.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return(0,ed.qy)`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?eP.C.parseCaipAddress(this.caipAddress):{},i=this.selectedExchange?.name;return this.selectedExchange?(0,ed.qy)`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${i}</wui-text>
          <wui-image src=${(0,em.J)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:(0,ed.qy)`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${z.Zv.getTruncateString({string:this.profileName||t||i||"",charsStart:this.profileName?16:4,charsEnd:6*!this.profileName,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,em.J)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?tx.map(e=>({...e,status:"failed"})):tx.map(e=>{let t=(tA[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}})}renderStep({title:e,icon:t,status:i}){return(0,ed.qy)`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,tg.H)({"step-icon-box":!0,success:"completed"===i})}>
            ${this.renderStatusIndicator(i)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?(0,ed.qy)`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?(0,ed.qy)`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?(0,ed.qy)`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){let e=tp.state.requestId;if(!e||tk.includes(this.quoteStatus))this.stopPolling();else try{await tp.fetchQuoteStatus({requestId:e}),tk.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.profileName=c.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=l.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let a=X.$.getConnectorImage(i);return{name:i.name,image:a}}};t$.styles=tS,tT([(0,eh.w)()],t$.prototype,"paymentAsset",void 0),tT([(0,eh.w)()],t$.prototype,"quoteStatus",void 0),tT([(0,eh.w)()],t$.prototype,"quote",void 0),tT([(0,eh.w)()],t$.prototype,"amount",void 0),tT([(0,eh.w)()],t$.prototype,"namespace",void 0),tT([(0,eh.w)()],t$.prototype,"caipAddress",void 0),tT([(0,eh.w)()],t$.prototype,"profileName",void 0),tT([(0,eh.w)()],t$.prototype,"activeConnectorIds",void 0),tT([(0,eh.w)()],t$.prototype,"selectedExchange",void 0),t$=tT([(0,z.EM)("w3m-pay-loading-view")],t$);var tP=i(21736);let tI=(0,U.AH)`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var tC=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tE=class extends M.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return(0,M.qy)`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let e=this.icon?(0,M.qy)`<wui-icon
          size=${(0,H.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:(0,M.qy)`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return(0,M.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        ${this.enableGreenCircle?(0,M.qy)`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return(0,M.qy)`
      <wui-text variant="lg-regular" color="primary">
        ${tP.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return(0,M.qy)`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};tE.styles=[D.W5,D.fD,tI],tC([(0,L.MZ)()],tE.prototype,"address",void 0),tC([(0,L.MZ)()],tE.prototype,"profileName",void 0),tC([(0,L.MZ)()],tE.prototype,"alt",void 0),tC([(0,L.MZ)()],tE.prototype,"imageSrc",void 0),tC([(0,L.MZ)()],tE.prototype,"icon",void 0),tC([(0,L.MZ)()],tE.prototype,"iconSize",void 0),tC([(0,L.MZ)({type:Boolean})],tE.prototype,"enableGreenCircle",void 0),tC([(0,L.MZ)({type:Boolean})],tE.prototype,"loading",void 0),tC([(0,L.MZ)({type:Number})],tE.prototype,"charsStart",void 0),tC([(0,L.MZ)({type:Number})],tE.prototype,"charsEnd",void 0),tE=tC([(0,F.E)("wui-wallet-switch")],tE),i(26400);let tN=(0,ed.AH)`
  :host {
    display: block;
  }
`,tq=class extends ed.WF{render(){return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};tq.styles=[tN],tq=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,z.EM)("w3m-pay-fees-skeleton")],tq);let tW=(0,z.AH)`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var tR=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tO=class extends ed.WF{constructor(){super(),this.unsubscribe=[],this.quote=tp.state.quote,this.unsubscribe.push(tp.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=b.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){let t="network"===e.id,i=b.S.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){let t=c.W.getAllRequestedCaipNetworks().find(t=>eI.y.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return(0,ed.qy)`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${i} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,em.J)(X.$.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return(0,ed.qy)`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${i} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};tO.styles=[tW],tR([(0,eh.w)()],tO.prototype,"quote",void 0),tO=tR([(0,z.EM)("w3m-pay-fees")],tO);let tz=(0,z.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var tM=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tD=class extends ed.WF{constructor(){super(),this.unsubscribe=[],this.selectedExchange=tp.state.selectedExchange,this.unsubscribe.push(tp.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!!this.selectedExchange;return(0,ed.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:(0,ed.qy)`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};tD.styles=[tz],tM([(0,ep.M)({type:Array})],tD.prototype,"selectedExchange",void 0),tD=tM([(0,z.EM)("w3m-pay-options-empty")],tD);let tF=(0,z.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,tU=class extends ed.WF{render(){return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return(0,ed.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};tU.styles=[tF],tU=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,z.EM)("w3m-pay-options-skeleton")],tU);let tj=(0,z.AH)`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var tB=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tL=class extends ed.WF{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".pay-options-container");e?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:t,metadata:i,asset:a,amount:r="0"}=e,o=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===t),n=`${t}:${a}`,s=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,l=b.S.bigNumber(r,{safe:!0}),u=l.gt(0);return(0,ed.qy)`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,em.J)(i.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,em.J)(X.$.getNetworkImage(o))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${i.symbol}</wui-text>
            ${u?(0,ed.qy)`<wui-text variant="sm-regular" color="secondary">
                  ${l.round(6).toString()} ${i.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${n===s?(0,ed.qy)`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(e.scrollHeight>300?(e.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--options-scroll--top-opacity",z.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",z.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0")))}};tL.styles=[tj],tB([(0,ep.M)({type:Array})],tL.prototype,"options",void 0),tB([(0,ep.M)()],tL.prototype,"selectedPaymentAsset",void 0),tB([(0,ep.M)()],tL.prototype,"onSelect",void 0),tL=tB([(0,z.EM)("w3m-pay-options")],tL);let tH=(0,z.AH)`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var t_=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tZ={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}},tV=class extends ed.WF{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=tp.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=tp.state.amount,this.recipient=tp.state.recipient,this.activeConnectorIds=l.a.state.activeConnectorIds,this.selectedPaymentAsset=tp.state.selectedPaymentAsset,this.selectedExchange=tp.state.selectedExchange,this.isFetchingQuote=tp.state.isFetchingQuote,this.quoteError=tp.state.quoteError,this.quote=tp.state.quote,this.isFetchingTokenBalances=tp.state.isFetchingTokenBalances,this.tokenBalances=tp.state.tokenBalances,this.isPaymentInProgress=tp.state.isPaymentInProgress,this.exchangeUrlForQuote=tp.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(tp.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(tp.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(tp.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(l.a.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(tp.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(tp.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(tp.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(tp.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(tp.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(tp.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(tp.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(tp.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(tp.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return(0,ed.qy)`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){let e=b.S.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return(0,ed.qy)`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?(0,ed.qy)`<wui-text variant="lg-regular" color="primary">
                ${b.S.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:(0,ed.qy)`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=A.w.getPlainAddress(this.caipAddress)??"",{name:t,image:i}=this.getWalletProperties({namespace:this.namespace}),{icon:a,label:r}=tZ[this.namespace]??{};return(0,ed.qy)`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,em.J)(this.profileName)}
          address=${(0,em.J)(e)}
          imageSrc=${(0,em.J)(i)}
          alt=${(0,em.J)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,em.J)(r)}
          address=${(0,em.J)(e)}
          icon=${(0,em.J)(a)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,em.J)(r)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.profileName=c.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.W.subscribeChainProp("accountState",e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){let{chainId:t,chainNamespace:i}=eP.C.parseCaipAddress(this.caipAddress),a=`${i}:${t}`;e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===a)}await tp.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?eP.C.parseCaipAddress(this.caipAddress):{};tp.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};let i=l.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};let a=X.$.getConnectorImage(i);return{name:i.name,image:a}}paymentOptionsViewTemplate(){return(0,ed.qy)`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return(0,ed.qy)`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return(0,ed.qy)`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;let t={disabled:this.isFetchingQuote};return(0,ed.qy)`<w3m-pay-options
      class=${(0,tg.H)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,em.J)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?(0,ed.qy)`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:(0,ed.qy)`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,i=b.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?(0,ed.qy)`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:(0,ed.qy)`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:(0,ed.qy)`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?(0,ed.qy)`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:(0,ed.qy)`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${tn(i)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){let t=e0(this.quote),{isLoading:i,isDisabled:a}=e,r="Pay";return t.length>1&&0===this.completedTransactionsCount&&(r="Approve"),(0,ed.qy)`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${a||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${r}
        ${i?null:(0,ed.qy)`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return function(e){let t=c.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId),i=e.address;if(!t)throw Error(`Target network not found for balance chainId "${e.chainId}"`);if(eI.y.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(A.w.isCaipAddress(i)){let{address:e}=eP.C.parseCaipAddress(i);i=e}else if(!i)throw Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(e){return null}}).filter(e=>!!e).filter(e=>{let{chainId:t}=eP.C.parseCaipNetworkId(e.network),{chainId:i}=eP.C.parseCaipNetworkId(this.paymentAsset.network);return!!eI.y.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||!this.selectedExchange||!eI.y.isLowerCaseMatch(t.toString(),i.toString())}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[t]=this.getPaymentAssetFromTokenBalances();t&&tp.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.a.connect(),await s.W.open({view:"PayQuote"})}onAccountStateChanged(e){let{address:t}=this.caipAddress?eP.C.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){let{address:e}=this.caipAddress?eP.C.parseCaipAddress(this.caipAddress):{};e?eI.y.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.W.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||tp.setSelectedPaymentAsset(e)}async onTransfer(){let e=eX(this.quote);if(e){if(!eI.y.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw Error("Quote asset is not the same as the selected payment asset");let t=this.selectedPaymentAsset?.amount??"0",i=b.S.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.S.bigNumber(t).gte(i))return void g.P.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:t}=eP.C.parseCaipAddress(this.caipAddress);await tp.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),tp.setRequestId(e.requestId),d.I.push("PayLoading")}}}async onSendTransactions(){let e=this.selectedPaymentAsset?.amount??"0",t=b.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.S.bigNumber(e).gte(t))return void g.P.showError("Insufficient funds");let i=e0(this.quote),[a]=e0(this.quote,this.completedTransactionsCount);a&&this.namespace&&(await tp.onSendTransaction({namespace:this.namespace,transactionStep:a}),this.completedTransactionsCount+=1,this.completedTransactionsCount===i.length&&(tp.setRequestId(a.requestId),d.I.push("PayLoading")))}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=A.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;let t=eX(this.quote);t&&tp.setRequestId(t.requestId),tp.initiatePayment(),d.I.push("PayLoading")}}resetAssetsState(){tp.setSelectedPaymentAsset(null)}resetQuoteState(){tp.resetQuoteState()}};tV.styles=tH,t_([(0,eh.w)()],tV.prototype,"profileName",void 0),t_([(0,eh.w)()],tV.prototype,"paymentAsset",void 0),t_([(0,eh.w)()],tV.prototype,"namespace",void 0),t_([(0,eh.w)()],tV.prototype,"caipAddress",void 0),t_([(0,eh.w)()],tV.prototype,"amount",void 0),t_([(0,eh.w)()],tV.prototype,"recipient",void 0),t_([(0,eh.w)()],tV.prototype,"activeConnectorIds",void 0),t_([(0,eh.w)()],tV.prototype,"selectedPaymentAsset",void 0),t_([(0,eh.w)()],tV.prototype,"selectedExchange",void 0),t_([(0,eh.w)()],tV.prototype,"isFetchingQuote",void 0),t_([(0,eh.w)()],tV.prototype,"quoteError",void 0),t_([(0,eh.w)()],tV.prototype,"quote",void 0),t_([(0,eh.w)()],tV.prototype,"isFetchingTokenBalances",void 0),t_([(0,eh.w)()],tV.prototype,"tokenBalances",void 0),t_([(0,eh.w)()],tV.prototype,"isPaymentInProgress",void 0),t_([(0,eh.w)()],tV.prototype,"exchangeUrlForQuote",void 0),t_([(0,eh.w)()],tV.prototype,"completedTransactionsCount",void 0),tV=t_([(0,z.EM)("w3m-pay-quote-view")],tV);let tK=(0,z.AH)`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`;var tQ=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tG=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.paymentAsset=tp.state.paymentAsset,this.amount=tp.state.amount,this.unsubscribe.push(tp.subscribeKey("paymentAsset",e=>{this.paymentAsset=e}),tp.subscribeKey("amount",e=>{this.amount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=c.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return(0,a.qy)`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,o.J)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};tG.styles=[tK],tQ([(0,r.MZ)()],tG.prototype,"paymentAsset",void 0),tQ([(0,r.MZ)()],tG.prototype,"amount",void 0),tG=tQ([(0,z.EM)("w3m-pay-header")],tG);let tY=(0,z.AH)`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var tJ=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tX=["SmartSessionList"],t0={PayWithExchange:z.f.tokens.theme.foregroundPrimary};function t3(){let e=d.I.state.data?.connector?.name,t=d.I.state.data?.wallet?.name,i=d.I.state.data?.network?.name,a=t??e,r=l.a.getConnectors(),o=1===r.length&&r[0]?.id==="w3m-email",n=c.W.getAccountData()?.socialProvider;return{Connect:`Connect ${o?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:a??"Connect Wallet",ConnectingWalletConnect:a??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:a?`Get ${a}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let t1=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.heading=t3()[d.I.state.view],this.network=c.W.state.activeCaipNetwork,this.networkImage=X.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=d.I.state.view,this.viewDirection="",this.unsubscribe.push(ee.j.subscribeNetworkImages(()=>{this.networkImage=X.$.getNetworkImage(this.network)}),d.I.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=t3()[e]},eu.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),c.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=X.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=t0[d.I.state.view]??z.f.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),(0,a.qy)`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),d.I.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){let e=n.H?.state?.features?.smartSessions;return"Account"===d.I.state.view&&e?(0,a.qy)`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>d.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return(0,a.qy)`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return(0,a.qy)`<w3m-pay-header></w3m-pay-header>`;let e=tX.includes(this.view);return(0,a.qy)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?(0,a.qy)`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:e}=d.I.state,t="Connect"===e,i=n.H.state.enableEmbedded,r=n.H.state.enableNetworkSwitch;return"Account"===e&&r?(0,a.qy)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,o.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,o.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===e||"ConnectingSiwe"===e||t&&i)?(0,a.qy)`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:(0,a.qy)`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),d.I.push("Networks"))}isAllowedNetworkSwitch(){let e=c.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onViewChange(){let{history:e}=d.I.state,t=eu.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=eu.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=d.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){d.I.goBack()}};t1.styles=tY,tJ([(0,r.wk)()],t1.prototype,"heading",void 0),tJ([(0,r.wk)()],t1.prototype,"network",void 0),tJ([(0,r.wk)()],t1.prototype,"networkImage",void 0),tJ([(0,r.wk)()],t1.prototype,"showBack",void 0),tJ([(0,r.wk)()],t1.prototype,"prevHistoryLength",void 0),tJ([(0,r.wk)()],t1.prototype,"view",void 0),tJ([(0,r.wk)()],t1.prototype,"viewDirection",void 0),t1=tJ([(0,z.EM)("w3m-header")],t1),i(84915),i(15642);let t2=(0,U.AH)`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var t4=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let t5=class extends M.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return(0,M.qy)`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?(0,M.qy)`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:(0,M.qy)`<wui-icon-box
      size="md"
      color=${({success:"success",error:"error",warning:"warning",info:"default"})[this.variant]}
      icon=${({success:"checkmark",error:"warning",warning:"warningCircle",info:"info"})[this.variant]}
    ></wui-icon-box>`}};t5.styles=[D.W5,t2],t4([(0,L.MZ)()],t5.prototype,"message",void 0),t4([(0,L.MZ)()],t5.prototype,"variant",void 0),t5=t4([(0,F.E)("wui-snackbar")],t5);let t6=(0,a.AH)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var t8=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let t7=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=g.P.state.open,this.unsubscribe.push(g.P.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=g.P.state;return(0,a.qy)` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),g.P.state.autoClose&&(this.timeout=setTimeout(()=>g.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};t7.styles=t6,t8([(0,r.wk)()],t7.prototype,"open",void 0),t7=t8([(0,z.EM)("w3m-snackbar")],t7);let t9=(0,y.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ie=(0,I.X)({state:t9,subscribe:e=>(0,y.B1)(t9,()=>e(t9)),subscribeKey:(e,t)=>(0,f.u$)(t9,e,t),showTooltip({message:e,triggerRect:t,variant:i}){t9.open=!0,t9.message=e,t9.triggerRect=t,t9.variant=i},hide(){t9.open=!1,t9.message="",t9.triggerRect={width:0,height:0,top:0,left:0}}}),it=(0,a.AH)`
  :host {
    width: 100%;
    display: block;
  }
`;var ii=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ia=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=ie.state.open,this.unsubscribe.push(d.I.subscribeKey("view",()=>{ie.hide()}),s.W.subscribeKey("open",e=>{e||ie.hide()}),ie.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),ie.hide()}render(){return(0,a.qy)`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return(0,a.qy)`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();if(!this.open){let t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){let a=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-a.width)/2,i.top=e.top-(window.innerHeight-a.height)/2}ie.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||ie.hide()}};ia.styles=[it],ii([(0,r.MZ)()],ia.prototype,"text",void 0),ii([(0,r.wk)()],ia.prototype,"open",void 0),ia=ii([(0,z.EM)("w3m-tooltip-trigger")],ia);let ir=(0,z.AH)`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e["3"]} 10px ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e["5"]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var io=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let is=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.open=ie.state.open,this.message=ie.state.message,this.triggerRect=ie.state.triggerRect,this.variant=ie.state.variant,this.unsubscribe.push(ie.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,(0,a.qy)`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};is.styles=[ir],io([(0,r.wk)()],is.prototype,"open",void 0),io([(0,r.wk)()],is.prototype,"message",void 0),io([(0,r.wk)()],is.prototype,"triggerRect",void 0),io([(0,r.wk)()],is.prototype,"variant",void 0),is=io([(0,z.EM)("w3m-tooltip")],is);let ic={getTabsByNamespace:e=>e&&e===v.o.CHAIN.EVM?n.H.state.remoteFeatures?.activity===!1?eu.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):eu.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let e=d.I.state.view;if(eu.VIEWS_WITH_LEGAL_FOOTER.includes(e)){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,i=n.H.state.features?.legalCheckbox;return(!!e||!!t)&&!i}return eu.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};i(97745);let il=(0,z.AH)`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var iu=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let id=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=n.H.state.remoteFeatures,this.unsubscribe.push(n.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,i=n.H.state.features?.legalCheckbox;return(e||t)&&!i?(0,a.qy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:(0,a.qy)`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=n.H.state;return e?(0,a.qy)`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:e}=n.H.state;return e?(0,a.qy)`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?(0,a.qy)`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:(0,a.qy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}};id.styles=[il],iu([(0,r.wk)()],id.prototype,"remoteFeatures",void 0),id=iu([(0,z.EM)("w3m-legal-footer")],id),i(45667);let ip=(0,a.AH)``,ih=class extends a.WF{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state;return e||t?(0,a.qy)`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return(0,a.qy)` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){N.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,S.lj)(c.W.state.activeChain)===x.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),d.I.push("WhatIsABuy")}};ih.styles=[ip],ih=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,z.EM)("w3m-onramp-providers-footer")],ih);let im=(0,z.AH)`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var iw=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ig=class extends a.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=d.I.state.view}firstUpdated(){this.status=ic.hasFooter()?"show":"hide",this.unsubscribe.push(d.I.subscribeKey("view",e=>{this.view=e,this.status=ic.hasFooter()?"show":"hide","hide"===this.status&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return(0,a.qy)`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return ic.hasFooter()?(0,a.qy)` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return(0,a.qy)`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return(0,a.qy)`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return(0,a.qy)` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){N.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),d.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};ig.styles=[im],iw([(0,r.wk)()],ig.prototype,"status",void 0),iw([(0,r.wk)()],ig.prototype,"view",void 0),ig=iw([(0,z.EM)("w3m-footer")],ig);let iy=(0,z.AH)`
  :host {
    display: block;
    width: inherit;
  }
`;var ib=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let iv=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.viewState=d.I.state.view,this.history=d.I.state.history.join(","),this.unsubscribe.push(d.I.subscribeKey("view",()=>{this.history=d.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return(0,a.qy)`${this.templatePageContainer()}`}templatePageContainer(){return(0,a.qy)`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=d.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return(0,a.qy)`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return(0,a.qy)`<w3m-account-view></w3m-account-view>`;case"AllWallets":return(0,a.qy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return(0,a.qy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return(0,a.qy)`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return(0,a.qy)`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return(0,a.qy)`<w3m-connect-view></w3m-connect-view>`;case"Create":return(0,a.qy)`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,a.qy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return(0,a.qy)`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return(0,a.qy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,a.qy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return(0,a.qy)`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return(0,a.qy)`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return(0,a.qy)`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return(0,a.qy)`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return(0,a.qy)`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return(0,a.qy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return(0,a.qy)`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return(0,a.qy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,a.qy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return(0,a.qy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return(0,a.qy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,a.qy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return(0,a.qy)`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return(0,a.qy)`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return(0,a.qy)`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return(0,a.qy)`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return(0,a.qy)`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return(0,a.qy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return(0,a.qy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return(0,a.qy)`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return(0,a.qy)`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return(0,a.qy)`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return(0,a.qy)`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return(0,a.qy)`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return(0,a.qy)`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return(0,a.qy)`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return(0,a.qy)`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return(0,a.qy)`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return(0,a.qy)`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return(0,a.qy)`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return(0,a.qy)`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return(0,a.qy)`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return(0,a.qy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return(0,a.qy)`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return(0,a.qy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return(0,a.qy)`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return(0,a.qy)`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return(0,a.qy)`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return(0,a.qy)`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return(0,a.qy)`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return(0,a.qy)`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return(0,a.qy)`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return(0,a.qy)`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return(0,a.qy)`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return(0,a.qy)`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return(0,a.qy)`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return(0,a.qy)`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return(0,a.qy)`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return(0,a.qy)`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return(0,a.qy)`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};iv.styles=[iy],ib([(0,r.wk)()],iv.prototype,"viewState",void 0),ib([(0,r.wk)()],iv.prototype,"history",void 0),iv=ib([(0,z.EM)("w3m-router")],iv);let ix=(0,z.AH)`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var ik=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let iS="scroll-lock",iT={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class iA extends a.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=n.H.state.enableEmbedded,this.open=s.W.state.open,this.caipAddress=c.W.state.activeCaipAddress,this.caipNetwork=c.W.state.activeCaipNetwork,this.shake=s.W.state.shake,this.filterByNamespace=l.a.state.filterByNamespace,this.padding=z.f.spacing[1],this.mobileFullScreen=n.H.state.enableMobileFullScreen,this.initializeTheming(),u.N.prefetchAnalyticsConfig(),this.unsubscribe.push(s.W.subscribeKey("open",e=>e?this.onOpen():this.onClose()),s.W.subscribeKey("shake",e=>this.shake=e),c.W.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),c.W.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),n.H.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),l.a.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||c.W.getAccountData(e)?.caipAddress||(u.N.fetchRecommendedWallets(),this.filterByNamespace=e)}),d.I.subscribeKey("view",()=>{this.dataset.border=ic.hasFooter()?"true":"false",this.padding=iT[d.I.state.view]??z.f.spacing[1]}))}firstUpdated(){if(this.dataset.border=ic.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){s.W.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return(this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded)?(0,a.qy)`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?(0,a.qy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return(0,a.qy)` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,o.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&(this.mobileFullScreen||await this.handleClose())}async handleClose(){await m.safeClose()}initializeTheming(){let{themeVariables:e,themeMode:t}=w.W.state,i=z.Zv.getColorTheme(t);(0,z.RF)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),g.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=iS,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${iS}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=c.W.state.isSwitchingNamespace,i="ProfileWallets"===d.I.state.view;e||t||i||s.W.close(),await h.U.initializeIfEnabled(e),this.caipAddress=e,c.W.setIsSwitchingNamespace(!1)}onNewNetwork(e){let t=this.caipNetwork,i=t?.caipNetworkId?.toString(),a=e?.caipNetworkId?.toString(),r="UnsupportedChain"===d.I.state.view,o=s.W.state.open,n=!1;this.enableEmbedded&&"SwitchNetwork"===d.I.state.view&&(n=!0),i!==a&&O.resetState(),o&&r&&(n=!0),n&&"SIWXSignMessage"!==d.I.state.view&&d.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(u.N.prefetch(),u.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}iA.styles=ix,ik([(0,r.MZ)({type:Boolean})],iA.prototype,"enableEmbedded",void 0),ik([(0,r.wk)()],iA.prototype,"open",void 0),ik([(0,r.wk)()],iA.prototype,"caipAddress",void 0),ik([(0,r.wk)()],iA.prototype,"caipNetwork",void 0),ik([(0,r.wk)()],iA.prototype,"shake",void 0),ik([(0,r.wk)()],iA.prototype,"filterByNamespace",void 0),ik([(0,r.wk)()],iA.prototype,"padding",void 0),ik([(0,r.wk)()],iA.prototype,"mobileFullScreen",void 0);let i$=class extends iA{};i$=ik([(0,z.EM)("w3m-modal")],i$);let iP=class extends iA{};iP=ik([(0,z.EM)("appkit-modal")],iP);let iI=(0,z.AH)`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`,iC=class extends a.WF{constructor(){super()}render(){return(0,a.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){d.I.goBack()}};iC.styles=iI,iC=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,z.EM)("w3m-usage-exceeded-view")],iC);var iE=i(47653);i(37082);let iN=(0,z.AH)`
  :host {
    width: 100%;
  }
`;var iq=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let iW=class extends a.WF{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1),e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&N.E.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:d.I.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(iE.q.state.adapters).length>1?this.namespaces:[]}render(){return(0,a.qy)`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,o.J)(this.imageSrc)}
        name=${this.name}
        size=${(0,o.J)(this.size)}
        tagLabel=${(0,o.J)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};iW.styles=iN,iq([(0,r.MZ)({type:Array})],iW.prototype,"walletImages",void 0),iq([(0,r.MZ)()],iW.prototype,"imageSrc",void 0),iq([(0,r.MZ)()],iW.prototype,"name",void 0),iq([(0,r.MZ)()],iW.prototype,"size",void 0),iq([(0,r.MZ)()],iW.prototype,"tagLabel",void 0),iq([(0,r.MZ)()],iW.prototype,"tagVariant",void 0),iq([(0,r.MZ)()],iW.prototype,"walletIcon",void 0),iq([(0,r.MZ)()],iW.prototype,"tabIdx",void 0),iq([(0,r.MZ)({type:Boolean})],iW.prototype,"disabled",void 0),iq([(0,r.MZ)({type:Boolean})],iW.prototype,"showAllWallets",void 0),iq([(0,r.MZ)({type:Boolean})],iW.prototype,"loading",void 0),iq([(0,r.MZ)({type:String})],iW.prototype,"loadingSpinnerColor",void 0),iq([(0,r.MZ)()],iW.prototype,"rdnsId",void 0),iq([(0,r.MZ)()],iW.prototype,"displayIndex",void 0),iq([(0,r.MZ)()],iW.prototype,"walletRank",void 0),iq([(0,r.MZ)({type:Array})],iW.prototype,"namespaces",void 0),iW=iq([(0,z.EM)("w3m-list-wallet")],iW);let iR=(0,z.AH)`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var iO=function(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let iz=class extends a.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=n.H.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){let e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height,i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");this.mobileFullScreen?(e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-i,this.style.setProperty("--local-border-bottom-radius","0px")):(e+=i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){let e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return(0,a.qy)`
      <div class="container" data-mobile-fullscreen="${(0,o.J)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,o.J)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){let t=e.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),a=i.length,r=t.length,o=t[t.length-1]||"",n=z.Zv.cssDurationToNumber(this.transitionDuration),s="";r>a?s="next":r<a?s="prev":r===a&&t[r-1]!==i[a-1]&&(s="next"),this.viewDirection=`${s}-${o}`,setTimeout(()=>{this.historyState=e,this.setView?.(o)},n),setTimeout(()=>{this.viewDirection=""},2*n)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){let e=this.getWrapper();if(!e)return;let t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0"),i=0;this.mobileFullScreen?(i=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")):(i=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${i}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return 60}};iz.styles=[iR],iO([(0,r.MZ)({type:String})],iz.prototype,"transitionDuration",void 0),iO([(0,r.MZ)({type:String})],iz.prototype,"transitionFunction",void 0),iO([(0,r.MZ)({type:String})],iz.prototype,"history",void 0),iO([(0,r.MZ)({type:String})],iz.prototype,"view",void 0),iO([(0,r.MZ)({attribute:!1})],iz.prototype,"setView",void 0),iO([(0,r.wk)()],iz.prototype,"viewDirection",void 0),iO([(0,r.wk)()],iz.prototype,"historyState",void 0),iO([(0,r.wk)()],iz.prototype,"previousHeight",void 0),iO([(0,r.wk)()],iz.prototype,"mobileFullScreen",void 0),iz=iO([(0,z.EM)("w3m-router-container")],iz)}}]);