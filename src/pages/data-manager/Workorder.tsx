import React from 'react'
import styles from './index.less'
import { Button } from 'antd'
export default function Workorder() {
    return (
        <div className={styles.work_order}>

            {/* 工单列表... */}
            {/* 模糊查询 */}
            <div className={styles.search}>

            </div>
            {/* 新增数据列表 */}
            <div className={styles.add}>
                <Button
                    type="primary"
                    size="large"
                >+</Button>
            </div>
            {/* 数列表展示 */}
        </div>
    )
}
