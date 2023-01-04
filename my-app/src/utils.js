import Folder from "./components/Folder";
import File from "./components/File";
import { FOLDER_TYPE } from "./Constants";

export const renderCurrentType = (data, expandedFolders = []) =>
  data.map(i =>
    i.type === FOLDER_TYPE ? (
      expandedFolders.some(f => f.includes(i.name)) ? (
      <Folder key={JSON.stringify({ ...i, expandedFolders: expandedFolders })}
        name={i.name} children={i.children}
        expandedFolders={expandedFolders}
        />) : null
    ) : (
      expandedFolders.some(f => f.includes(i.name)) ? (
        <File key={JSON.stringify({ ...i, expandedFolders: expandedFolders })}
          name={i.name} mime={i.mime}
        />) : null
    )
  );

export const treeToMap = (data = [], path = '') => {
    let result = {};

    data.forEach(d => {
        if(d.type === FOLDER_TYPE){
            const r = treeToMap(d.children, `${path}/${d.name}` );
            result = {...result, ...r};
        }
        else {
            result[`${path}/${d.name}`] = d.name;
        }
    })

    return result;
}
