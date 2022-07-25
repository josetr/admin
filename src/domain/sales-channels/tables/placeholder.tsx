import React from "react"

import Button from "../../../components/fundamentals/button"
import SidedMouthFaceIcon from "../../../components/fundamentals/icons/sided-mouth-face"

function Placeholder({ showAddModal }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SidedMouthFaceIcon color="#6B7280" width="48" height="48" />

      <h3 className="font-semibold text-large text-gray-90 mt-6">
        Start building your channels setup...
      </h3>
      <p className="mt-2 mb-8 text-grey-50 w-[358px] text-center">
        You haven’t added any products to this channels yet, but once you do
        they will live here.
      </p>

      <Button onClick={showAddModal} variant="primary" size="small">
        Add products
      </Button>
    </div>
  )
}

export default Placeholder
