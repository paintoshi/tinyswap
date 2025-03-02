'use client'
import { Widget } from "@/app/components/Widget";
import { defaultFee, WidgetEvents } from "@/app/components/WidgetEvents";
import { useState } from "react";

const WidgetContainer = () => {
  const [fee, setFee] = useState<number | undefined>(defaultFee);

  return <>
    <Widget fee={fee} />
    <WidgetEvents setFee={setFee} />
  </>

}

export default WidgetContainer;
