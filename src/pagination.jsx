import React from 'react'
import {Pagination} from '@cyber-insight/cps-ui';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

const Pagina = () => {
    return (
        <div>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
          <br />
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
            disabled
          />
        </div>
      )
}

export default Pagina