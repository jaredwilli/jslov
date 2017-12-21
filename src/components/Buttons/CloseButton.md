### Close or Delete button example

```js
<div className="close-buttons">
    <div>
        <CloseButton size="xl" onClick={() => buttonClicked()} />
        <CloseButton size="lg" onClick={() => buttonClicked()} />
        <CloseButton onClick={() => buttonClicked()} />
        <CloseButton size="sm" onClick={() => buttonClicked()} />
        <CloseButton size="xs" onClick={() => buttonClicked()} />
    </div>
    <div>
        <CloseButton text="Close" onClick={() => buttonClicked()} />
    </div>
    <div>
        <CloseButton text="Done" icon="check" onClick={() => buttonClicked()} />
    </div>
</div>
```
