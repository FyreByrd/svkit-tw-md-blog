<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import { routes } from '$lib/data/routes';
  import { ArrowDropdown } from '$lib/icons';

  const title = 'SvKit-TW-MD-Blog';

  beforeNavigate(() => {
    Array.from(document.getElementById('menus')!.getElementsByTagName('details')).forEach(
      (d: HTMLDetailsElement) => (d.open = false)
    );
  });
</script>

<header>
  <nav class="navbar bg-base-300">
    <div class="lg:hidden">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <ArrowDropdown />
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <!-- This works, trust me. I just don't know how to get the errors to go away -->
          {#each routes as opt}
            <li>
              {#if opt.children}
                <details name="menu">
                  <summary>{opt.title}</summary>
                  <ul class="p-2">
                    {#each opt.children as child}
                      <li>
                        <a href={opt.root + child.route}>{child.title}</a>
                      </li>
                    {/each}
                  </ul>
                </details>
              {:else}
                <a href={opt.route}>{opt.title}</a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
      <a href="/">{title}</a>
    </div>
    <div class="hidden lg:contents">
      <div class="flex-1">
        <a href="/">{title}</a>
      </div>
      <div class="flex-none" id="menus">
        <ul class="menu menu-horizontal px-1">
          {#each routes as opt}
            <li>
              {#if opt.children}
                <details name="menu">
                  <summary>{opt.title}</summary>
                  <ul class="bg-base-200 rounded-t-none p-2 min-w-40">
                    {#each opt.children as child}
                      <li>
                        <a href={opt.root + child.route}>{child.title}</a>
                      </li>
                    {/each}
                  </ul>
                </details>
              {:else}
                <a href={opt.route}>{opt.title}</a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>
</header>
