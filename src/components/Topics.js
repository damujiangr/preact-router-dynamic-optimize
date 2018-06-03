import { h } from 'preact';
import { Icon, Button } from 'antd-mobile';

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <Icon type="check" />
        <Button type="primary">Primary</Button>
    </div>
);

export default Topics;