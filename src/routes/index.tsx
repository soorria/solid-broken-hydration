// @refresh reload
import { ComponentProps, ParentComponent } from 'solid-js'

const Wrapper: ParentComponent<ComponentProps<'div'>> = props => {
  return (
    <div
      /**
       * Hydration warning occurs when props are spread, and
       * there's 1+ "non-spread" props and children is used
       */
      {...props}
      class={props.class}
    >
      {props.children}
    </div>
  )
}

const WrappedDiv: ParentComponent = props => {
  return (
    <Wrapper>
      <div style="font-weight: 900; font-size: 3rem; text-align: center">
        {props.children}
      </div>

      {/* no warning with only function child */}
      {/* {() => {
        return (
          <div style="font-weight: 900; font-size: 3rem; text-align: center">
            {props.children}
          </div>
        )
      }} */}
    </Wrapper>
  )
}

export default function Home() {
  return <WrappedDiv>TEXT</WrappedDiv>
}
