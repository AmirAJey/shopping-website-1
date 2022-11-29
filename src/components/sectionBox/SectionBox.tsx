import { SectionBoxProps } from "./SectionBox.types"

const SectionBox = ({fullWidth = false, children}: SectionBoxProps) => {
  return (
    <div className={`${fullWidth ? '' : 'py-5 px-16'}`}>
      {children}
    </div>
  )
}

export default SectionBox