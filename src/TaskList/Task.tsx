import { Component } from "solid-js";

const Task: Component<{ done: boolean; contents: string; starred: boolean }> = (
  props
) => {
  return (
    <div class="list-group-item">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked={props.done} />
        {props.contents}
      </div>
      {/* <input type="checkbox" id="star-checkbox" checked={props.starred} /> */}
    </div>
  );
};

export default Task;
