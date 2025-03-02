import type { ChainTokenSelected } from '@lifi/widget';
import { useWidgetEvents, WidgetEvent } from '@lifi/widget';
import { useEffect, useState } from 'react';

export const defaultFee = 0.005;
const S = '0x0000000000000000000000000000000000000000';
const wS = '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38';

// Nullify integrator fee for wrapped sonic
export const WidgetEvents = ({ setFee }: { setFee: (fee: number | undefined) => void }) => {
  const widgetEvents = useWidgetEvents();
  const [sourceToken, setSourceToken] = useState<{chainId: number, tokenAddress: string} | null>(null);
  const [destToken, setDestToken] = useState<{chainId: number, tokenAddress: string} | null>(null);

  // Check if the current pair is S <-> wS on Sonic chain
  const updateFeeBasedOnTokenPair = () => {
    const isSonicChain = (chainId: number) => chainId === 146;
    
    // Check if we have both tokens selected
    if (!sourceToken || !destToken) return;
    
    // Check if one token is S and the other is wS on Sonic chain
    const isSourceS = isSonicChain(sourceToken.chainId) && sourceToken.tokenAddress === S;
    const isSourceWS = isSonicChain(sourceToken.chainId) && sourceToken.tokenAddress === wS;
    const isDestS = isSonicChain(destToken.chainId) && destToken.tokenAddress === S;
    const isDestWS = isSonicChain(destToken.chainId) && destToken.tokenAddress === wS;
    
    // Check for S <-> wS pair in either direction
    if ((isSourceS && isDestWS) || (isSourceWS && isDestS)) {
      setFee(undefined);
    } else {
      setFee(defaultFee);
    }
  }

  useEffect(() => {
    const handleSourceChainTokenSelected = (chainTokenSelected: ChainTokenSelected) => {
      if (chainTokenSelected) {
        setSourceToken({
          chainId: chainTokenSelected.chainId,
          tokenAddress: chainTokenSelected.tokenAddress
        });
      }
    };
    
    const handleDestinationChainTokenSelected = (chainTokenSelected: ChainTokenSelected) => {
      if (chainTokenSelected) {
        setDestToken({
          chainId: chainTokenSelected.chainId,
          tokenAddress: chainTokenSelected.tokenAddress
        });
      }
    };
    
    widgetEvents.on(WidgetEvent.SourceChainTokenSelected, handleSourceChainTokenSelected);
    widgetEvents.on(WidgetEvent.DestinationChainTokenSelected, handleDestinationChainTokenSelected);
    
    return () => widgetEvents.all.clear();
  }, [widgetEvents]);

  // Update fee whenever source or destination token changes
  useEffect(() => {
    updateFeeBasedOnTokenPair();
  }, [sourceToken, destToken]);

  return null;
};