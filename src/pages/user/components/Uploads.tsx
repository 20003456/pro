import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
export let pic = ''
const props = {
    name: 'file',
    multiple: false,
    action: 'https://elm.cangdu.org/v1/addimg/shop',
    onChange(info: any) {
        console.log(info);
        pic = info.fileList[0].response && 'https://elm.cangdu.org/img/' + info.fileList[0].response.image_path
    },
};
export default function Uploads() {
    return (
        <div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
                <p className="ant-upload-hint">&nbsp;支持单个或批量上传,严禁上传公司数据或其他隐私文件!&nbsp;</p>
            </Dragger>
        </div>
    )
}

