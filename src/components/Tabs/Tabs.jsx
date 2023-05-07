import { PureComponent } from "react";
import css from "./Tabs.module.css"



export default class Tabs extends PureComponent {
    state = {
        activeTabIdx: 0,
    };

//     shouldComponentUpdate(nextProps, nextState) {
//         return nextState.activeTabIdx !== this.state.activeTabIdx;
// }

    setActiveTabIdx = idx => {
        this.setState({
          activeTabIdx: idx,
        });
      };
    
     
    
      render() {
        console.log(`Re-render @ ${Date.now()}`);
    
        const { tabs } = this.props;
        const { activeTabIdx } = this.state;
        const activeTab = tabs[activeTabIdx];
    
        return (
          <div className={css.Tab__box}>
            <div >
              {tabs.map((tab, idx) => (
                <button
                  type="button"
                  key={tab.label}
                  onClick={() => this.setActiveTabIdx(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
    
            <div className={css.Tab__text}>
              <h2>
                {activeTab.label}
              </h2>
              <p>
                {activeTab.content}
              </p>
            </div>
          </div>
        );
      }
    }

