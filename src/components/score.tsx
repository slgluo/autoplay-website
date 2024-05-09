'use client'

import abcjs from "abcjs";
import React, {PropsWithChildren, ReactElement, useEffect, useId} from "react";

type ScoreProps = PropsWithChildren

export default function Score(props: ScoreProps) {
  const scoreId = useId()

  useEffect(() => {
    const node = props.children
    if (!node) return

    const content = (node as ReactElement)?.props?.children
    if (content) {
      abcjs.renderAbc(scoreId, content)
    } else {
      console.log(scoreId, props.children)
    }
  }, [props.children, scoreId])

  return (
    <>
      {props.children ? <div id={scoreId}></div> : null}
    </>
  )
}
