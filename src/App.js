import React from 'react';
import ReactDom from 'react-dom';
import GridManager from 'gridmanager-react';
import './js/ajaxPageTemplate.jsx';
import 'gridmanager-react/css/gm-react.css';
import './css/gridmanager-reset.less'

const App = () => {
    // 表格组件配置
    const option = {
        gridManagerName: 'testReact',
        skinClassName: 'element-react-skin',
        height: '100%',
        columnData: [
            {
                key: 'pic',
                remind: 'the pic',
                width: '110px',
                text: '缩略图',
                template: (pic, row) => {
                    return (
                        <img style={{width: '90px', margin: '0 auto'}} src={'https://www.lovejavascript.com' + pic}
                             title={row.name}/>
                    );
                }
            },
            {
                key: 'title',
                remind: 'the title',
                text: '标题',
            },
            {
                key: 'type',
                remind: 'the type',
                text: '分类',
                align: 'center'
            },
            {
                key: 'info',
                remind: 'the info',
                text: '使用说明'
            },
            {
                key: 'username',
                remind: 'the username',
                text: '作者',
                // 使用函数返回 dom node
                template: (username, row, index) => {
                    return (
                        <a href={'https://github.com/baukh789'} target={'_black'}>{username}</a>
                    );
                }
            },
            {
                key: 'createDate',
                remind: 'the createDate',
                width: '100px',
                text: '创建时间',
                sorting: 'DESC',
                // 使用函数返回 htmlString
                template: function (createDate, rowObject) {
                    return new Date(createDate).toLocaleDateString();
                }
            },
            {
                key: 'lastDate',
                remind: 'the lastDate',
                width: '120px',
                text: '最后修改时间',
                sorting: '',
                fixed: 'right',
                // 使用函数返回 htmlString
                template: function (lastDate, rowObject) {
                    return new Date(lastDate).toLocaleDateString();
                }
            },
            {
                key: 'action',
                remind: 'the action',
                width: '100px',
                disableCustomize: true,
            }
        ],
        supportRemind: true,
        isCombSorting:  true,
        supportAjaxPage: true,
        supportSorting: false,
        supportAutoOrder: true,
        disableLine: false,
        ajaxData: 'https://www.lovejavascript.com/blogManager/getBlogList',
        ajaxType: 'POST',
    };

    return (
        <>
            <GridManager
                option={option}
                height={'90vh'}
            />
        </>
    )
}

export default App;
ReactDom.render(<App/>, document.getElementById('app'));
