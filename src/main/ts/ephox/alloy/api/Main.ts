import * as EventRoot from '../alien/EventRoot';
import { SugarEvent } from '../alien/TypeDefinitions';
import { BehaviourState } from '../behaviour/common/BehaviourState';
import * as Fields from '../data/Fields';
import * as Debugging from '../debugging/Debugging';
import * as FunctionAnnotator from '../debugging/FunctionAnnotator';
import {
  CustomEvent,
  CustomSimulatedEvent,
  EventFormat,
  NativeSimulatedEvent,
  ReceivingEvent,
  SimulatedEvent,
} from '../events/SimulatedEvent';
import * as TapEvent from '../events/TapEvent';
import * as AlloyLogger from '../log/AlloyLogger';
import * as AlloyParts from '../parts/AlloyParts';
import * as PartType from '../parts/PartType';
import * as AddEventsBehaviour from './behaviour/AddEventsBehaviour';
import * as Behaviour from './behaviour/Behaviour';
import { Composing } from './behaviour/Composing';
import { Coupling } from './behaviour/Coupling';
import { Disabling } from './behaviour/Disabling';
import { Docking } from './behaviour/Docking';
import { Dragging } from './behaviour/Dragging';
import { Focusing } from './behaviour/Focusing';
import { Highlighting } from './behaviour/Highlighting';
import { Invalidating } from './behaviour/Invalidating';
import { Keying } from './behaviour/Keying';
import { Pinching } from './behaviour/Pinching';
import { Positioning } from './behaviour/Positioning';
import { Receiving } from './behaviour/Receiving';
import { Replacing } from './behaviour/Replacing';
import { Representing } from './behaviour/Representing';
import { Sandboxing } from './behaviour/Sandboxing';
import { Sliding } from './behaviour/Sliding';
import { Streaming } from './behaviour/Streaming';
import { Swapping } from './behaviour/Swapping';
import { Tabstopping } from './behaviour/Tabstopping';
import { Toggling } from './behaviour/Toggling';
import { Transitioning } from './behaviour/Transitioning';
import { Unselecting } from './behaviour/Unselecting';
import * as CompBehaviours from './component/CompBehaviours';
import * as Component from './component/Component';
import * as ComponentApi from './component/ComponentApi';
import * as ComponentUtil from './component/ComponentUtil';
import * as DomFactory from './component/DomFactory';
import * as GuiFactory from './component/GuiFactory';
import * as GuiTemplate from './component/GuiTemplate';
import * as Memento from './component/Memento';
import * as SketchBehaviours from './component/SketchBehaviours';
import {
  AlloySpec,
  ComponentSpec,
  PremadeSpec,
  RawDomSchema,
  SimpleOrSketchSpec,
  SimpleSpec,
  SketchSpec,
} from './component/SpecTypes';
import * as Composite from './composite/Parts';
import * as DragCoord from './data/DragCoord';
import * as AlloyEvents from './events/AlloyEvents';
import * as AlloyTriggers from './events/AlloyTriggers';
import * as NativeEvents from './events/NativeEvents';
import * as SystemEvents from './events/SystemEvents';
import * as FocusManagers from './focus/FocusManagers';
import * as Channels from './messages/Channels';
import * as Attachment from './system/Attachment';
import * as ForeignGui from './system/ForeignGui';
import * as Gui from './system/Gui';
import { NoContextApi } from './system/NoContextApi';
import * as SystemApi from './system/SystemApi';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { DataField } from './ui/DataField';
import { Dropdown } from './ui/Dropdown';
import { ExpandableForm } from './ui/ExpandableForm';
import { Form } from './ui/Form';
import { FormChooser } from './ui/FormChooser';
import { FormCoupledInputs } from './ui/FormCoupledInputs';
import { FormField } from './ui/FormField';
import * as GuiTypes from './ui/GuiTypes';
import { HtmlSelect } from './ui/HtmlSelect';
import { InlineView } from './ui/InlineView';
import { Input } from './ui/Input';
import * as ItemWidget from './ui/ItemWidget';
import { Menu } from './ui/Menu';
import { ModalDialog } from './ui/ModalDialog';
import * as Sketcher from './ui/Sketcher';
import { Slider } from './ui/Slider';
import { SplitDropdown } from './ui/SplitDropdown';
import { SplitToolbar } from './ui/SplitToolbar';
import { Tabbar } from './ui/Tabbar';
import { TabButton } from './ui/TabButton';
import { TabSection } from './ui/TabSection';
import { Tabview } from './ui/Tabview';
import { TieredData, tieredMenu as TieredMenu } from './ui/TieredMenu';
import { Toolbar } from './ui/Toolbar';
import { ToolbarGroup } from './ui/ToolbarGroup';
import { TouchMenu } from './ui/TouchMenu';
import { Typeahead } from './ui/Typeahead';
import * as UiSketcher from './ui/UiSketcher';

// TODO: naughty non API's being exported
// Type Def Exports
export {
  AddEventsBehaviour,
  Behaviour,
  Composing,
  Coupling,
  Disabling,
  Docking,
  Dragging,
  Focusing,
  Highlighting,
  Invalidating,
  Keying,
  Pinching,
  Positioning,
  Receiving,
  Replacing,
  Representing,
  Sandboxing,
  Sliding,
  Streaming,
  Swapping,
  Tabstopping,
  Toggling,
  Transitioning,
  Unselecting,
  CompBehaviours,
  Composite,
  Component,
  ComponentApi,
  ComponentUtil,
  DomFactory,
  GuiFactory,
  GuiTemplate,
  Memento,
  SketchBehaviours,
  DragCoord,
  AlloyEvents,
  AlloyTriggers,
  NativeEvents,
  SystemEvents,
  FocusManagers,
  Channels,
  Attachment,
  ForeignGui,
  Gui,
  NoContextApi,
  SystemApi,
  Button,
  Container,
  DataField,
  Dropdown,
  ExpandableForm,
  Form,
  FormChooser,
  FormCoupledInputs,
  FormField,
  GuiTypes,
  HtmlSelect,
  InlineView,
  Input,
  ItemWidget,
  Menu,
  ModalDialog,
  Sketcher,
  Slider,
  SplitDropdown,
  SplitToolbar,
  Tabbar,
  TabButton,
  TabSection,
  Tabview,
  TieredMenu,
  TieredData,
  Toolbar,
  ToolbarGroup,
  TouchMenu,
  Typeahead,
  UiSketcher,
  Fields,

  AlloyParts,
  BehaviourState,
  PartType,
  EventRoot,
  TapEvent,
  AlloyLogger,
  Debugging,
  FunctionAnnotator,

  AlloySpec,
  SimpleOrSketchSpec,
  RawDomSchema,
  ComponentSpec,
  SketchSpec,
  SimpleSpec,
  PremadeSpec,
  CustomEvent,
  EventFormat,
  SimulatedEvent,
  NativeSimulatedEvent,
  CustomSimulatedEvent,
  ReceivingEvent,
  SugarEvent
};