### Basic default button no attributes

```jsx
<div>
    <Button></Button>
</div>
```

### Buttons of different predefined sizes:

Note: default size is `md`. It does not need to be set to make a medium sized button.

```jsx
<div>
    <div>
        <Button size="xl" className="primary">Primary</Button>
        <Button size="xl" className="success">Success</Button>
        <Button size="xl" className="info">Info</Button>
        <Button size="xl" className="warning">Warning</Button>
        <Button size="xl" className="danger">Danger</Button>
        <Button size="xl" className="inverse">Inverse</Button>
        <Button size="xl" className="faded">Faded</Button>
    </div>
    <div>
        <Button size="lg" className="primary">Primary</Button>
        <Button size="lg" className="success">Success</Button>
        <Button size="lg" className="info">Info</Button>
        <Button size="lg" className="warning">Warning</Button>
        <Button size="lg" className="danger">Danger</Button>
        <Button size="lg" className="inverse">Inverse</Button>
        <Button size="lg" className="faded">Faded</Button>
    </div>
    <div>
        <Button className="primary">Primary</Button>
        <Button className="success">Success</Button>
        <Button className="info">Info</Button>
        <Button className="warning">Warning</Button>
        <Button className="danger">Danger</Button>
        <Button className="inverse">Inverse</Button>
        <Button className="faded">Faded</Button>
    </div>
    <div>
        <Button size="sm" className="primary">Primary</Button>
        <Button size="sm" className="success">Success</Button>
        <Button size="sm" className="info">Info</Button>
        <Button size="sm" className="warning">Warning</Button>
        <Button size="sm" className="danger">Danger</Button>
        <Button size="sm" className="inverse">Inverse</Button>
        <Button size="sm" className="faded">Faded</Button>
    </div>
    <div>
        <Button size="xs" className="primary">Primary</Button>
        <Button size="xs" className="success">Success</Button>
        <Button size="xs" className="info">Info</Button>
        <Button size="xs" className="warning">Warning</Button>
        <Button size="xs" className="danger">Danger</Button>
        <Button size="xs" className="inverse">Inverse</Button>
        <Button size="xs" className="faded">Faded</Button>
    </div>
</div>
```


You can disable an editor by passing a `noeditor` modifier (` ```js noeditor `):

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier (` ```js static `):

```js static
import React from 'react';
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```
