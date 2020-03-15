import { useEffect, useState, cloneElement } from "react";

const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

function getTimePerCharacter(props, lengthOfCharactersCurrentlyRendered) {
  const duration = (props?.duration || 2000);

  return duration / ((props.children?.length || 0) + (props?.backspace || lengthOfCharactersCurrentlyRendered || 0));
}

export function useTypewriteLinesExtraction(props: any): any {
  const [lines, setLines] = useState<any>(null);

  async function typewriterMediator() {
    if (props.loop) {
      while (true) {
        await writeLines();
      }
    }

    await writeLines();
  }

  async function writeLines() {
    const children = Array.isArray(props.children)
      ? props.children
      : [props.children];

    let charactersCurrentlyRendered = "";

    for (const element of children) {
      await delay(element.props.delay || 0);

      const timePerText = getTimePerCharacter(element.props, charactersCurrentlyRendered.length);

      for (const _index of Array.from(Array(element.props?.backspace || charactersCurrentlyRendered.length))) {
        charactersCurrentlyRendered = charactersCurrentlyRendered.slice(0, -1);

        setLines(
          cloneElement(
            element,
            element.props,
            charactersCurrentlyRendered
          )
        )

        await delay(timePerText);
      }


      for (const character of element.props.children) {
        charactersCurrentlyRendered += character;

        setLines(
          cloneElement(
            element,
            element.props,
            charactersCurrentlyRendered
          )
        )

        await delay(timePerText);
      }
    }
  }

  useEffect(() => {
    typewriterMediator();
  }, []);

  return lines;
}
