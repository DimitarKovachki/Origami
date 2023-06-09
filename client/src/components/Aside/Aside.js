import { useState } from 'react';
import { listItem } from './ItemsConstants';
// import AsideItems from './AsideItems'

function Aside({
        onAsideItemClick
    }) {

    const [currentItem, setCurrentItem] = useState();

    let asideItemClickHandler = (id) => {
        setCurrentItem(id);
        onAsideItemClick(id)
    }

    let listStyles = ['aside-list-item'];

    return (
        <aside className="app-aside">
            <ul className="aside-nav-list">
                {
                    listItem.map(x =>
                        <li key={x.id}
                            className={x.id == currentItem ? 'aside-list-item list-item-selected' : 'aside-list-item'}
                            onClick={asideItemClickHandler.bind(null, x.id)}>
                            <a href="#">
                                List Item {x.id}
                            </a>
                        </li>
                        // <AsideItems key={x.id} id={x.id} onClick={setCurrentItem}>{x.id}</AsideItems>
                    )
                }


            </ul>
        </aside>
    )
}

export default Aside;