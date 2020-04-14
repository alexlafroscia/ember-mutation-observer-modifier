import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, settled } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import td from "testdouble";

module("Integration | Modifier | observe-mutation", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onChange = td.function();
  });

  test("observing attribute changes", async function (assert) {
    this.someAttr = "foo";

    // Test passing config as positional param
    await render(hbs`
      <div
        some-attr={{this.someAttr}}
        {{observe-mutation this.onChange (hash attributes=true)}}
      ></div>
    `);

    this.set("someAttr", "bar");
    await settled();

    assert.verify(
      this.onChange(),
      { ignoreExtraArgs: true },
      "Called the action"
    );
  });

  test("observing changes to the child nodes", async function (assert) {
    this.childrenVisible = false;

    // Test passing config as hash params
    await render(hbs`
      <div {{observe-mutation this.onChange childList=true}}>
        {{#if this.childrenVisible}}
          <p>Child</p>
        {{/if}}
      </div>
    `);

    this.set("childrenVisible", true);
    await settled();

    assert.verify(
      this.onChange(),
      { ignoreExtraArgs: true },
      "Called the action"
    );
  });
});
