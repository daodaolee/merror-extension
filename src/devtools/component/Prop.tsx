import { CopyIcon } from "../icon"

const Prop = ({ selectNode }: any) => {
  const array = Object.keys(selectNode)
  // debugger
  if (selectNode.children && selectNode.children.length) {
    array.filter(item => item !== "children")
  }
  const propsData = array.filter(item => item !== "children")
  return <div className="p-4 flex flex-col flex-1  overflow-auto">
    <div className="transition-all flex-1">
      <div className="text-[#595959] text-base">Props</div>
      {propsData.length ? propsData.map((item, index) => {
        return <div key={index} className="pl-4 flex">
          <span className="text-[#965FE6] text-sm">{item}:</span>&emsp;
          <span className="text-[#595959] text-sm cursor-pointer flex items-center" onClick={() => {
            navigator.clipboard.writeText(selectNode[item])
          }}>{selectNode[item]}&emsp;<CopyIcon /> </span>
        </div>
      }) : <div className="text-center text-base text-[#595959]">No Data</div>}
    </div>
    <div className="border-t border-[#ddd] transition-all pt-2 flex-1 overflow-auto">
      <div className="text-[#595959] text-base">Children</div>
      {selectNode.children ? selectNode.children.map((item, index) => {
        return <div key={index} className="pl-4">
          <span className="text-[#965FE6] text-sm">{item.type}:</span>&nbsp;
          <span className="text-[#595959] text-sm">{item.id}</span>
        </div>
      }) : <div className="text-center text-base text-[#595959]">No Data</div>}
    </div>




  </div>
}
export default Prop