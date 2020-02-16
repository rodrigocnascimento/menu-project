import React from 'react';
import { ReactComponent as arrow } from "./icons/arrow.svg";
import { ReactComponent as trash } from "./icons/trash.svg";
import { ReactComponent as zoom_in } from "./icons/zoom-in.svg";
import { ReactComponent as edit_pencil } from "./icons/edit-pencil.svg";
import { ReactComponent as checkmark_outline } from "./icons/checkmark-outline.svg";
import { ReactComponent as close } from "./icons/close.svg";

const iconTypes = {
  arrow,
  trash,
  zoom_in,
  edit_pencil,
  checkmark_outline,
  close,
};

function Icons({ name, ...props }) {
    name = name.replace("-", "_");
    let Icon = iconTypes[name];
    return <Icon {...props} />;
}

export default Icons;
