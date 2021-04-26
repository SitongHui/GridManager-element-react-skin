import React from 'react';
import Table, { $gridManager } from 'gridmanager-react';
import 'gridmanager-react/css/gm-react.css';
import '../css/gridmanager-reset.less';
// import './index.less';

const ajaxPageTemplate = `
<div class="gm-toolbar" grid-manager-toolbar="{{vm.gridManagerName}}">
    <!--分页切换-->
    <div class="pagination">

        <span class="totals-count">
            共&nbsp;<span totals-number-info></span>&nbsp;条
        </span>

        <!--每页显示条数-->
        <div class="change-size">
             {{ vm.pageSizeOptionTpl }}
        </div>

        <!--上一页-->
        <ul pagination-before>
            <li class="previous-page">&lt;</li>
        </ul>
        <!--页码区-->
        <ul pagination-number></ul>
        <!--下一页-->
        <ul pagination-after>
            <li class="next-page">&gt;</li>
        </ul>
    </div>

    <!--跳转至-->
    <div class="goto-page">
        前往
        <input type="text" class="gp-input" current-page-info/>
        {{ vm.gotoLastText }}
    </div>
</div>
`;

const voidStyle = {
    textAlign: 'center',
};

// const voidIconStyle = {
// 	color: '#ddd',
// 	fontSize: '40px',
// 	verticalAlign: 'middle',
// 	marginRight: '10px'
// };
const voidMsgStyle = {
    display: 'inline-block',
    fontSize: '14px',
    color: '#999',
    verticalAlign: 'middle',
};
const emptyTemplate = settings => {
    const text = window.jTool.isEmptyObject(settings.query) ? '暂无数据' : '搜索为空';
    return (
        <div style={voidStyle}>
            {/* <Icon type="warning-circle-solid" style={voidIconStyle} /> */}
            <span style={voidMsgStyle}>{text}</span>
        </div>
    );
};

const defaultOption = {
    skinClassName: 'element-react-skin', // 页样式名称
    emptyTemplate,
    ajaxPageTemplate,
};

$gridManager.defaultOption = defaultOption;

export default GridManager;
